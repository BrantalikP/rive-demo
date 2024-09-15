import * as Haptics from 'expo-haptics'
import React from 'react'
import { Dimensions } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'
import {
  cancelAnimation,
  Extrapolation,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

import {
  COMPLETION_THRESHOLD,
  OPENING_DURATION,
  REPEAT_DELAY,
  ROTATION_DEGREE,
  ROTATION_DURATION,
  ROTATION_TIP_OFFSET,
  TRANSITION_DURATION,
  TRANSITION_THRESHOLD,
} from './presets'

import { STRIPE_HEIGHT } from '~/features/crates/components/CrateWrapper/parts/Stripe'
import { TIP_HEIGHT } from '~/features/crates/components/CrateWrapper/parts/Tip'

const { width } = Dimensions.get('window')
interface Props {
  zoom: SharedValue<number>
}

export const useWrapperStyles = ({ zoom }: Props) => {
  const leftTranslateX = useSharedValue(0)
  const rightTranslateX = useSharedValue(0)
  const tipTranslateY = useSharedValue(0)
  const tipProgress = useSharedValue(0)
  const stripeContainerVisibility = useSharedValue(1)
  const lastY = useSharedValue(0)
  const isDragging = useSharedValue(false)
  const stripeLabelMaskY = useSharedValue(0)

  const handleTransition = () => {
    leftTranslateX.value = withTiming(-width / 2, { duration: TRANSITION_DURATION })
    rightTranslateX.value = withTiming(width / 2, { duration: TRANSITION_DURATION })
    zoom.value = withTiming(1, { duration: TRANSITION_DURATION })
  }
  const triggerHapticFeedback = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  const startRepeatAnimation = () => {
    tipRotateX.value = 0
    tipRotateX.value = withDelay(
      REPEAT_DELAY,
      withRepeat(withTiming(ROTATION_DEGREE, { duration: ROTATION_DURATION }), -1, true),
    )
    stripeLabelMaskY.value = withDelay(
      REPEAT_DELAY,
      withRepeat(withTiming(TIP_HEIGHT * 2 + 2, { duration: ROTATION_DURATION }), -1, true),
    )
  }

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      display: zoom.value === 1 ? 'none' : 'flex',
    }
  })

  const stripeAnimatedStyle = useAnimatedStyle(() => {
    return {
      display: stripeContainerVisibility.value === 1 ? 'flex' : 'none',
    }
  })

  const tipRotateX = useSharedValue(0)

  const tipAnimatedStyle = useAnimatedStyle(() => {
    const rotationDegree = interpolate(
      isDragging.value ? tipProgress.value : tipRotateX.value,
      isDragging.value ? [0, 0.5] : [0, ROTATION_DEGREE],
      [0, ROTATION_DEGREE],
      Extrapolation.CLAMP,
    )
    const translationY = interpolate(
      rotationDegree,
      [0, ROTATION_DEGREE],
      [0, TIP_HEIGHT - (isDragging.value ? ROTATION_TIP_OFFSET : 0)],
      Extrapolation.CLAMP,
    )

    return {
      transform: [
        { perspective: 1000 },
        { translateY: tipTranslateY.value },
        { translateY: translationY },
        { rotateX: `${rotationDegree}deg` },
      ],
    }
  })

  React.useEffect(() => {
    startRepeatAnimation()
  }, [])

  const tipGesture = Gesture.Pan()
    .onBegin(() => {
      cancelAnimation(tipRotateX)
      isDragging.value = true
      lastY.value = 0
    })
    .onUpdate((e) => {
      const isMovingDownward = e.translationY > lastY.value
      lastY.value = e.translationY

      tipTranslateY.value = interpolate(e.translationY, [0, STRIPE_HEIGHT], [0, STRIPE_HEIGHT], {
        extrapolateLeft: 'clamp',
      })

      tipProgress.value = interpolate(e.translationY, [0, STRIPE_HEIGHT], [0, 1], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
      })

      stripeLabelMaskY.value = tipTranslateY.value + TIP_HEIGHT / 1.5

      if (isMovingDownward) {
        runOnJS(triggerHapticFeedback)()
      }
      if (tipProgress.value >= TRANSITION_THRESHOLD) {
        stripeContainerVisibility.value = 0
        runOnJS(handleTransition)()
      }
    })
    .onEnd(() => {
      isDragging.value = false
      if (tipProgress.value >= COMPLETION_THRESHOLD) {
        tipTranslateY.value = withTiming(STRIPE_HEIGHT + TIP_HEIGHT, { duration: OPENING_DURATION })
        tipProgress.value = withTiming(1, { duration: OPENING_DURATION }, () => {
          runOnJS(handleTransition)()
        })
        tipRotateX.value = ROTATION_DEGREE
      } else {
        tipTranslateY.value = withTiming(0)
        tipProgress.value = withTiming(0)
        stripeLabelMaskY.value = withTiming(0, {}, () => {
          runOnJS(startRepeatAnimation)()
        })
      }
    })

  return {
    tipTranslateY,
    tipGesture,
    tipAnimatedStyle,
    leftTranslateX,
    stripeLabelMaskY,
    rightTranslateX,
    stripeAnimatedStyle,
    tipProgress,
    stripeContainerVisibility,
    zoom,
    containerAnimatedStyle,
  }
}
