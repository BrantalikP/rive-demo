import { Gesture } from 'react-native-gesture-handler'
import { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

interface Props {
  onPress: () => void
}

export const useProfileReaction = ({ onPress }: Props) => {
  const scale = useSharedValue(1)
  const opacity = useSharedValue(1)

  const tap = Gesture.Tap()
    .onBegin(() => {
      // TODO: add sound with expo AV
      scale.value = withSpring(0.9, { damping: 2, stiffness: 400 })
    })
    .onFinalize(() => {
      scale.value = withSpring(1, { damping: 2, stiffness: 400 }, () => runOnJS(onPress)())
    })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    }
  })

  return { tap, animatedStyle }
}
