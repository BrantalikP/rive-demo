import * as React from 'react'

import { Svg, Path, Rect } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const PlayIcon = () => (
  <Svg width={ms(48)} height={ms(48)} fill="none" viewBox="0 0 48 48">
    <Rect width={ms(44)} height={ms(44)} x={2} y={2} fill="#F05824" rx={22} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.38 13.576a2 2 0 0 1 2.043.081l13.334 8.667a2 2 0 0 1 0 3.353l-13.334 8.667a2 2 0 0 1-3.09-1.677V15.334a2 2 0 0 1 1.046-1.758Zm2.953 5.443v9.963L28.997 24l-7.664-4.982Z"
      clipRule="evenodd"
    />
  </Svg>
)
