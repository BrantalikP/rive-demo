import * as React from 'react'
import {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export const useAnimatedLoaderStyles = () => {
  const scale = useSharedValue(1)

  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true,
    )
  }, [scale])

  const animatedProps = useAnimatedProps(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  return { animatedProps }
}
