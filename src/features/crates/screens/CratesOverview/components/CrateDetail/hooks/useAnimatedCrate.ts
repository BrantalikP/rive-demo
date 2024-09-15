import { useEffect } from 'react'
import { useSharedValue, withTiming } from 'react-native-reanimated'

import {
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
} from '~/features/crates/screens/CratesOverview/components/CrateDetail/presets'
import { IMAGE_SIZE } from '~/features/crates/screens/CratesOverview/components/CrateProgress/presets'
import {
  FIRST_SEQUENCE_DELAY,
  OPACITY_DURATION,
  TRANSFORM_BORDER_RADIUS_DURATION,
  TRANSFORM_HEIGHT_DURATION,
  TRANSFORM_WIDTH_DURATION,
  TRANSLATE_DURATION,
} from '~/features/crates/screens/CratesOverview/presets'
import { useTheme } from '~/features/ui/theme/useTheme'

export const useAnimatedCrate = (startAnimation: boolean) => {
  const { spacing } = useTheme()
  const positionY = useSharedValue(0)
  const height = useSharedValue(CONTAINER_HEIGHT)
  const width = useSharedValue(CONTAINER_WIDTH)
  const borderRadius = useSharedValue(spacing['2xl'])
  const opacity = useSharedValue(1)
  const progressPosition = useSharedValue(0)

  useEffect(() => {
    if (startAnimation) {
      setTimeout(() => {
        positionY.value = withTiming(270 - IMAGE_SIZE / 2, { duration: TRANSLATE_DURATION })
        opacity.value = withTiming(0, { duration: OPACITY_DURATION })
        progressPosition.value = withTiming(270, { duration: TRANSLATE_DURATION })
        height.value = withTiming(IMAGE_SIZE, { duration: TRANSFORM_HEIGHT_DURATION })
        width.value = withTiming(IMAGE_SIZE, { duration: TRANSFORM_WIDTH_DURATION })
        borderRadius.value = withTiming(IMAGE_SIZE / 2, {
          duration: TRANSFORM_BORDER_RADIUS_DURATION,
        })
      }, FIRST_SEQUENCE_DELAY)
    }
  }, [startAnimation])
  const containerAnimatedStyle = {
    transform: [{ translateY: positionY }],
    height,
    width,
    borderRadius,
  }

  const innerContainerAnimatedStyle = {
    opacity,
  }

  const progressAnimatedStyle = {
    transform: [{ translateY: progressPosition }],
  }

  return { containerAnimatedStyle, innerContainerAnimatedStyle, progressAnimatedStyle }
}
