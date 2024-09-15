import { createVariant, createRestyleComponent, VariantProps } from '@shopify/restyle'
import { ComponentProps } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'

import { Theme } from '~/features/ui/theme/theme'

const buttonVariant = createVariant<Theme, 'buttonVariants'>({
  themeKey: 'buttonVariants',
})

export const AnimatedView = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Animated.View>,
  Theme
>([buttonVariant], Animated.View)

export const useButtonStyles = ({
  disabled,
  variant,
}: {
  disabled: boolean
  variant: ComponentProps<typeof AnimatedView>['variant']
}) => {
  const pressed = useSharedValue(false)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderBottomWidth: withSpring(pressed.value ? 2 : 6, {
        duration: 400,
      }),
      top: withSpring(pressed.value ? 4 : 0, {
        duration: 400,
      }),
    }
  })

  const color = (() => {
    if (disabled) {
      return 'beigeDarker' as const
    }
    if (variant === 'default') {
      return 'white' as const
    }

    return 'black' as const
  })()

  return {
    pressed,
    animatedStyle,
    color,
  }
}
