import { createBox } from '@shopify/restyle'
import { TouchableWithoutFeedback as _TouchableWithoutFeedback } from 'react-native'
import ReAnimated from 'react-native-reanimated'

import { Theme } from '../../theme/theme'

export const TouchableWithoutFeedback = createBox<
  Theme,
  React.ComponentProps<typeof _TouchableWithoutFeedback> & { children?: React.ReactNode }
>(_TouchableWithoutFeedback)

export const AnimatedTouchableWithoutFeedback =
  ReAnimated.createAnimatedComponent(TouchableWithoutFeedback)
