import { createBox } from '@shopify/restyle'
import { Video as _Video } from 'expo-av'

import { Theme } from '../../theme/theme'

export const Video = createBox<Theme, React.ComponentProps<typeof _Video>>(_Video)
