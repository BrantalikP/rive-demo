import { createBox } from '@shopify/restyle'
import { Pressable as _Pressable } from 'react-native'
import ReAnimated from 'react-native-reanimated'

import { Theme } from '../../theme/theme'

export const Pressable = createBox<
  Theme,
  React.ComponentProps<typeof _Pressable> & { children?: React.ReactNode }
>(_Pressable)
export const AnimatedPressable = ReAnimated.createAnimatedComponent(Pressable)
