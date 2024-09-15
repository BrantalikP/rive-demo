import React from 'react'

import { Path, Svg } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const ArrowLeft = () => (
  <Svg width={ms(18)} height={ms(14)} fill="none" viewBox="0 0 18 14">
    <Path
      fill="#00B261"
      d="M8.237 2.987A1.75 1.75 0 0 0 5.763.513l-5.25 5.25a1.75 1.75 0 0 0 0 2.474l5.25 5.25a1.75 1.75 0 1 0 2.474-2.474L6.725 9.5l-.855-.8 1.63.05h8.75a1.75 1.75 0 1 0 0-3.5H7.5l-1.63.05.855-.8 1.512-1.513Z"
    />
  </Svg>
)
