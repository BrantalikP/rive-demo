import * as React from 'react'

import { Path, Svg } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

export const PenIcon = () => {
  const { colors } = useTheme()
  return (
    <Svg width={ms(48)} height={ms(48)} fill="none" viewBox="0 0 48 48">
      <Path
        fill={colors.primary}
        fillRule="evenodd"
        d="M39.471 8.529a8.657 8.657 0 0 0-12.242 0L14.385 21.372A27 27 0 0 0 7.43 33.36l-1.323 4.85a3 3 0 0 0 3.683 3.684l4.851-1.323a27 27 0 0 0 11.988-6.956L39.471 20.77a8.657 8.657 0 0 0 0-12.242Zm-8 4.242a2.657 2.657 0 1 1 3.757 3.758L34 17.757 30.243 14l1.228-1.229ZM26 18.243l-7.372 7.372a21 21 0 0 0-5.35 9.108 21 21 0 0 0 9.107-5.351L29.757 22 26 18.243Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
