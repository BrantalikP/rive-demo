import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'

import { useCrateControllerCompleted } from '~/api/generated/apiComponents'
import { validateCrateOrderId } from '~/utils/validations'

const ANIMATION_DURATION = 100
const SEQUENCE_DURATION = 800

export const useMarkComplete = () => {
  const opacity = useSharedValue(1)
  const translateY = useSharedValue(0)
  const [isLoading, setIsLoading] = useState(false)
  const { crateOrderId } = useLocalSearchParams()
  const validatedCrateOrder = validateCrateOrderId({ crateOrderId })
  const { mutate: mutateCompleted, isPending } = useCrateControllerCompleted({
    onSuccess: () => {
      router.push({ pathname: '/crate-rate', params: { crateOrderId } })
    },
    onError: () => {
      // FIXME: show error when BE for crates is ready
      router.push({ pathname: '/crate-rate', params: { crateOrderId } })
    },
  })

  const pointAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    }
  })

  if (!validatedCrateOrder.success) {
    router.push({ pathname: '/crates-overview' })
  }

  const handlePress = ({ crateOrderId }: { crateOrderId: number }) => {
    setIsLoading(true)
    opacity.value = withSequence(
      withTiming(1, { duration: ANIMATION_DURATION }),
      withTiming(0, { duration: SEQUENCE_DURATION }, (finished) => {
        if (finished) {
          runOnJS(mutateCompleted)({ pathParams: { crateOrderId } })
          runOnJS(setIsLoading)(false)
        }
      }),
    )
    translateY.value = withSequence(
      withTiming(0, { duration: ANIMATION_DURATION }),
      withTiming(-50, { duration: SEQUENCE_DURATION }),
    )
  }

  return {
    pointAnimatedStyle,
    handlePress,
    isLoading: isLoading || isPending,
  }
}
