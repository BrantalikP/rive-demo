import React from 'react'

import { Path, Svg } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const Lock = () => {
  const { colors } = useTheme()
  return (
    <Svg width={ms(24)} height={ms(24)} fill="none" viewBox="0 0 24 24">
      <Path
        fill={colors.primary}
        fillRule="evenodd"
        d="M12 5a3 3 0 0 0-3 3v1h6V8a3 3 0 0 0-3-3Zm6 4V8A6 6 0 0 0 6 8v1h-.5A1.5 1.5 0 0 0 4 10.5v9A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 18.5 9H18Zm-1 3H7v6h10v-6Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
