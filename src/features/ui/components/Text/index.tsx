import { createText } from '@shopify/restyle'
import ReAnimated from 'react-native-reanimated'

import { Theme } from '../../theme/theme'

export const Text = createText<Theme>()
export const AnimatedText = ReAnimated.createAnimatedComponent(Text)
