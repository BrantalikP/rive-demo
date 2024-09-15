import { useLocalSearchParams } from 'expo-router'
import React from 'react'

import { ClipPath, Defs, G, Path, Rect, Svg } from '~/features/ui/components/Svg'
import { CrateThemeKeys } from '~/features/ui/theme/crateThemes'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const CrateIcon = () => {
  const { theme } = useLocalSearchParams()
  const { colors } = useTheme()

  const fillColor = colors[(theme as CrateThemeKeys) || 'labs']

  return (
    <Svg width={ms(24)} height={ms(20)} fill="none" viewBox="0 0 24 20">
      <G clipPath="url(#a)">
        <Rect width={24} height={20} fill={fillColor} rx={4} />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M21.724 5.96 18.6 1.8 17 3H3v10.505l-.72.54L5.4 18.2 7 17h14V6.502l.724-.543ZM20.003 6H20v.002L12.001 12H12l-6.4 4.8-1.92-2.556L18.4 3.2l1.923 2.56-.32.24Zm-7.669 7-4 3H20v-3h-7.666Zm1.334-1L20 7.252V12h-6.332ZM4 12.755 10.337 8H4v4.755ZM11.67 7l3.998-3H4v3h7.67Z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
