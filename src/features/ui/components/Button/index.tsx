import React, { ComponentProps, ReactNode } from 'react'

import { Stripes } from './parts/Stripes'
import { AnimatedView, useButtonStyles } from './styles'

import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'

interface Props extends ComponentProps<typeof Pressable> {
  label: ReactNode
  variant?: ComponentProps<typeof AnimatedView>['variant']
  innerContainerStyle?: ComponentProps<typeof AnimatedView>['style']
  textStyle?: ComponentProps<typeof Text>['style']
  disabled?: boolean
}

export const Button = ({
  label,
  onPress,
  onPressIn,
  onPressOut,
  variant = 'default',
  innerContainerStyle = {},
  textStyle = {},
  disabled = false,
  ...restProps
}: Props) => {
  const { pressed, animatedStyle, color } = useButtonStyles({ disabled, variant })

  return (
    <Pressable
      onPressIn={(event) => {
        pressed.value = true
        onPressIn && onPressIn(event)
      }}
      onPressOut={(event) => {
        pressed.value = false
        onPressOut && onPressOut(event)
      }}
      onPress={onPress}
      disabled={disabled}
      {...restProps}
    >
      <AnimatedView variant={variant} style={[animatedStyle, innerContainerStyle]}>
        {variant === 'striped' && <Stripes />}
        {typeof label === 'string' || typeof label === 'number' ? (
          <Text
            style={textStyle}
            color={color}
            variant={variant === 'square' ? 'buttonLarge' : 'button'}
            textAlign="center"
          >
            {label}
          </Text>
        ) : (
          label
        )}
      </AnimatedView>
    </Pressable>
  )
}
