import * as React from 'react'

import { IconProps } from '../types'

import { ICON_SIZE } from '~/features/navigation/parent/tabBar/parts/presets'
import { AnimatedPath, Path, Svg } from '~/features/ui/components/Svg'

export const ProfilesIcon = ({
  fillColor,
  strokeColor,
  animatedProps,
  ...restProps
}: IconProps) => (
  <Svg width={ICON_SIZE} height={ICON_SIZE} fill="none" viewBox="0 0 32 32" {...restProps}>
    <AnimatedPath
      animatedProps={animatedProps}
      d="M16 11.5a4.5 4.5 0 0 0-4.5 4.5v6a4.5 4.5 0 1 0-9 0v5.5h27V20a4.5 4.5 0 1 0-9 0v-4a4.5 4.5 0 0 0-4.5-4.5Z"
    />
    <Path fill={strokeColor} d="M16 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <Path
      fill={strokeColor}
      fillRule="evenodd"
      d="M16 10a6.002 6.002 0 0 1 5.893 4.866A6 6 0 0 1 31 20v7.5a1.5 1.5 0 0 1-1.5 1.5h-27A1.5 1.5 0 0 1 1 27.5V22a6 6 0 0 1 9-5.197V16a6 6 0 0 1 6-6Zm-3 6a3 3 0 1 1 6 0v10h-6V16Zm9 10v-6a3 3 0 1 1 6 0v6h-6Zm-12-4a3 3 0 1 0-6 0v4h6v-4Z"
      clipRule="evenodd"
    />
    <Path
      fill={strokeColor}
      d="M10 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM25 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
)
