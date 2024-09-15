import { createBox } from '@shopify/restyle'
import { ScrollView as _ScrollView } from 'react-native'

import { Theme } from '../../theme/theme'

export const ScrollView = createBox<
  Theme,
  React.ComponentProps<typeof _ScrollView> & { children?: React.ReactNode }
>(_ScrollView)
