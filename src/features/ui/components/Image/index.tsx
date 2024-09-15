import { createBox } from '@shopify/restyle'
import { Image as _Image } from 'expo-image'
import ReAnimated from 'react-native-reanimated'

import { Theme } from '../../theme/theme'

export const Image = createBox<Theme, React.ComponentProps<typeof _Image>>(_Image)

export const AnimatedImage = ReAnimated.createAnimatedComponent(Image)
