import * as React from 'react'

import { Path, Svg, Mask, G } from '~/features/ui/components/Svg'
import { ms } from '~/utils/scale'

export const Time = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={ms(57)} height={ms(56)} fill="none" viewBox="0 0 57 56" {...props}>
    <Path fill="#fff" d="M.5 0h56v56H.5z" />
    <G clipPath="url(#a)">
      <Mask id="b" width={43} height={50} x={7} y={3} maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M49.5 3.5h-42v49h42v-49Z" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="#C5ECF4"
          d="M28.125 29.002c-.899 1.287 9.12 4.739 9.12 4.739s1.766-6.025.262-8.656c-1.164-2.029-3.15-3.433-5.074-4.767"
        />
        <Path
          stroke="#231F20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="M38.809 32.493a11.1 11.1 0 0 1-11.16 7.156 14.089 14.089 0 0 1-8.482-4.404c-2.658-2.776-2.028-8.417-.052-11.414a11.346 11.346 0 0 1 11.476-4.648c4.208.923 9.044 5.304 8.912 9.906a10.332 10.332 0 0 1-.694 3.404Z"
        />
        <Path
          stroke="#231F20"
          strokeLinecap="round"
          strokeMiterlimit={10}
          d="M28.081 15.75c.021.922.098 1.84.229 2.753M26.573 15.643l2.763.136M34.461 19.047a3.588 3.588 0 0 1-.6.863M33.963 18.266l1.504 1.038M22.278 18.659c.478.355.881.8 1.188 1.31M21.62 19.192a2.876 2.876 0 0 1 1.156-1.329M28.044 20.12l.082 1.145M33.546 21.716l-.605.978M37.074 26.229l-1.063.44M37.294 31.954l-1.12-.265M34.122 36.724l-.753-.868M28.762 38.742l-.102-1.146M23.23 37.239l.587-.99M19.63 32.79l1.054-.459M19.31 27.067l1.124.246M22.396 22.242l.768.856M33.42 32.093c-1.799-.95-3.58-1.929-5.345-2.938"
        />
      </G>
    </G>
  </Svg>
)
