import { createBox } from '@shopify/restyle'
import { SectionList as _SectionList } from 'react-native'

import { Theme } from '../../theme/theme'

export const SectionList = createBox<
  Theme,
  React.ComponentProps<typeof _SectionList> & { children?: React.ReactNode }
>(_SectionList)
