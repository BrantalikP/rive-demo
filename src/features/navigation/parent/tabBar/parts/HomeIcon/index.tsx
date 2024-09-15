import * as React from 'react'

import { IconProps } from '../types'

import { ICON_SIZE } from '~/features/navigation/parent/tabBar/parts/presets'
import { AnimatedPath, AnimatedSvg, Path } from '~/features/ui/components/Svg'

export const HomeIcon = ({ fillColor, strokeColor, animatedProps, ...restProps }: IconProps) => (
  <AnimatedSvg width={ICON_SIZE} height={ICON_SIZE} fill="none" viewBox="0 0 32 32" {...restProps}>
    <AnimatedPath
      animatedProps={animatedProps}
      d="M12.5 20v7.5h-7V10.22L16 3.5l10.5 6.72V27.5h-7V20a3.5 3.5 0 1 0-7 0Z"
    />
    <Path
      fill={strokeColor}
      fillRule="evenodd"
      d="M16.808 2.237a1.5 1.5 0 0 0-1.617 0l-12.5 8A1.5 1.5 0 0 0 4 12.915V27.5A1.5 1.5 0 0 0 5.5 29h21a1.5 1.5 0 0 0 1.5-1.5V12.915a1.5 1.5 0 0 0 1.308-2.678l-12.5-8ZM25 11.04l-9-5.76-9 5.76V26h4v-6a5 5 0 0 1 10 0v6h4V11.04ZM18 20v6h-4v-6a2 2 0 1 1 4 0Z"
      clipRule="evenodd"
    />
  </AnimatedSvg>
)
