import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { Theme } from '~/features/ui/theme/theme'
import { useTheme } from '~/features/ui/theme/useTheme'

const inputVariant = createVariant<Theme, 'inputVariants'>({
  themeKey: 'inputVariants',
})

export const AnimatedView = createRestyleComponent<
  VariantProps<Theme, 'inputVariants'> & React.ComponentProps<typeof Animated.View>,
  Theme
>([inputVariant], Animated.View)

export const useInputStyles = ({ value }: { value?: string }) => {
  const theme = useTheme()
  const focused = useSharedValue(false)

  const labelStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(
        focused.value || value
          ? theme.textVariants.labelXSmall.fontSize
          : theme.textVariants.label.fontSize,
        {
          duration: 300,
        },
      ),
      top: withTiming(focused.value || value ? theme.spacing.sm : '50%', { duration: 300 }),
      transform: [{ translateY: withTiming(focused.value || value ? 0 : -14, { duration: 300 }) }],
    }
  })

  return {
    focused,
    labelStyle,
  }
}
