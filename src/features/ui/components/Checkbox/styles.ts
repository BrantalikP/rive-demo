import { SharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

import { useTheme } from '../../theme/useTheme'

export const useCheckboxStyles = ({ animatedValue }: { animatedValue: SharedValue<number> }) => {
  const theme = useTheme()

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(animatedValue.value) }],
    }
  })

  const animatedBoxStyle = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(
        animatedValue.value === 1 ? theme.colors.greenDarker : theme.colors.beigeDarker,
        { duration: 200 },
      ),
      backgroundColor: withTiming(
        animatedValue.value === 1 ? theme.colors.green : theme.colors.white,
        { duration: 200 },
      ),
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(
        animatedValue.value === 1 ? theme.colors.textPrimary2 : theme.colors.textPrimary,
        { duration: 200 },
      ),
    }
  })

  return {
    animatedStyle,
    animatedBoxStyle,
    animatedTextStyle,
    animatedValue,
  }
}
