import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle'
import { ComponentProps } from 'react'
import { TextInput } from 'react-native'

import { Theme } from '../../theme/theme'

const variant = createVariant<Theme, 'otpInputVariants'>({
  themeKey: 'otpInputVariants',
  defaults: {},
})

export const RestyleInput = createRestyleComponent<
  VariantProps<Theme, 'otpInputVariants'> & ComponentProps<typeof TextInput>,
  Theme
>([variant], TextInput)
