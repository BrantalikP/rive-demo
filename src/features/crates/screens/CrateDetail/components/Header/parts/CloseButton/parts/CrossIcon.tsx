import React from 'react'

import { Path, Svg } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const CrossIcon = () => {
  const { colors } = useTheme()
  return (
    <Svg width={ms(24)} height={ms(24)} fill="none" viewBox="0 0 24 24">
      <Path
        fill={colors.primary}
        d="M16.013 5.513a1.75 1.75 0 1 1 2.474 2.474L14.475 12l4.012 4.013a1.75 1.75 0 1 1-2.474 2.474L12 14.475l-4.013 4.012a1.75 1.75 0 1 1-2.474-2.474L9.525 12 5.513 7.987a1.75 1.75 0 0 1 2.474-2.474L12 9.525l4.013-4.012Z"
      />
    </Svg>
  )
}
