import { createBox } from '@shopify/restyle'
import { TouchableOpacity as _TouchableOpacity } from 'react-native'

import { Theme } from '../../theme/theme'

export const TouchableOpacity = createBox<
  Theme,
  React.ComponentProps<typeof _TouchableOpacity> & { children?: React.ReactNode }
>(_TouchableOpacity)
