import { ComponentProps } from 'react'

import { AnimatedSvg } from '~/features/ui/components/Svg'
import { CrateThemeKeys, crateThemes } from '~/features/ui/theme/crateThemes'

export interface ThemedSvg extends ComponentProps<typeof AnimatedSvg> {
  palette: (typeof crateThemes)[CrateThemeKeys]
}
