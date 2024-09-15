import { ComponentProps } from 'react'

import { Circle, Svg, Path } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const LikeRating = (props: ComponentProps<typeof Svg>) => (
  <Svg width={ms(41)} height={ms(40)} fill="none" viewBox="0 0 41 40" {...props}>
    <Path
      fill="#F8CE1D"
      d="M40.5 20c0 2.882-.61 5.622-1.707 8.097.173.467.403.898.639 1.338.521.975 1.068 1.997 1.068 3.565 0 5-2.333 7-6 7-2.258 0-4.196-.637-5.457-1.911A19.922 19.922 0 0 1 20.5 40c-3.056 0-5.952-.685-8.543-1.911C10.697 39.363 8.757 40 6.5 40c-3.667 0-6-2-6-7 0-1.568.547-2.59 1.068-3.565.236-.44.466-.871.639-1.338A19.93 19.93 0 0 1 .5 20c0-11.046 8.954-20 20-20s20 8.954 20 20Z"
    />
    <Circle cx={20.5} cy={20} r={20} fill="#F8CE1D" />
    <Path
      fill="#000"
      d="M26.727 21.333H14.275c-1.134 0-2.022.947-1.713 2.038.673 2.37 2.576 5.962 7.937 5.962 5.359 0 7.266-3.59 7.94-5.96.311-1.092-.577-2.04-1.712-2.04Z"
    />
    <Path
      fill="#FF3A57"
      d="M26.307 27.163a7.977 7.977 0 0 0-5.807-2.497 7.977 7.977 0 0 0-5.806 2.495c1.231 1.234 3.067 2.171 5.806 2.171 2.738 0 4.575-.937 5.807-2.17Z"
    />
    <Circle cx={27.167} cy={15.999} r={2.667} fill="#000" />
    <Circle cx={13.833} cy={15.999} r={2.667} fill="#000" />
    <Path
      fill="#FAA426"
      d="M40.5 33c0 5-2.333 7-6 7-4 0-7-2-7-6 0-5 3-6.5 4.5-6.5.892 0 1.43.176 1.72.32.251.144.417.277.537.407.202.219.308.47.428.905a.5.5 0 1 0 .964-.265c-.132-.477-.29-.918-.656-1.317-.247-.268-.569-.497-.993-.717V25.5c0-1.71 1-3.5 2.5-3.5s2 1 2 3v1.5c0 1.193.456 2.044.932 2.934.521.976 1.068 1.997 1.068 3.565ZM.5 33c0 5 2.333 7 6 7 4 0 7-2 7-6 0-5-3-6.5-4.5-6.5-.892 0-1.43.176-1.72.32a2.21 2.21 0 0 0-.537.407c-.202.219-.308.47-.428.905a.5.5 0 1 1-.964-.265c.132-.477.29-.918.656-1.317.247-.268.569-.497.993-.717V25.5C7 23.79 6 22 4.5 22s-2 1-2 3v1.5c0 1.193-.456 2.044-.932 2.934C1.046 30.41.5 31.431.5 33Z"
    />
  </Svg>
)
