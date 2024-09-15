import * as React from 'react'

import { Svg, Path, Circle } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const DeliveryIcon = () => (
  <Svg width={ms(48)} height={ms(48)} fill="none" viewBox="0 0 48 48">
    <Path
      fill="#1C446B"
      d="M4 26a1 1 0 0 1 1-1h20a1 1 0 0 0 1-1V14a1 1 0 0 1 1-1h7.382a1 1 0 0 1 .894.553l3.594 7.186a1 1 0 0 0 .38.41l4.264 2.56a1 1 0 0 1 .486.857V30a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z"
    />
    <Path fill="#00B261" d="M6 11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H6V11Z" />
    <Circle cx={11} cy={33} r={5} fill="#2D2D2D" />
    <Circle cx={37} cy={33} r={5} fill="#2D2D2D" />
    <Circle cx={11} cy={33} r={2} fill="#fff" />
    <Circle cx={37} cy={33} r={2} fill="#fff" />
    <Path
      fill="#fff"
      d="M29 17a1 1 0 0 1 1-1h2.382a1 1 0 0 1 .894.553l2 4A1 1 0 0 1 34.382 22H30a1 1 0 0 1-1-1v-4Z"
    />
    <Path
      fill="#FCE965"
      d="M40.518 24.777a.5.5 0 0 1 .416-.777H42.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-.232a.5.5 0 0 1-.416-.223l-1.334-2Z"
    />
  </Svg>
)
