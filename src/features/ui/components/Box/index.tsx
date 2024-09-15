import { createBox } from '@shopify/restyle'
import ReAnimated from 'react-native-reanimated'

import { Theme } from '../../theme/theme'

export const Box = createBox<Theme>()
export const AnimatedBox = ReAnimated.createAnimatedComponent(Box)
