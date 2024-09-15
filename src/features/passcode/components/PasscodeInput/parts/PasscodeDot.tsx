import React from 'react'

import { AnimatedBox } from '~/features/ui/components/Box'
import { Theme } from '~/features/ui/theme/theme'

interface PasscodeDotProps {
  filled: boolean
  color: keyof Theme['colors']
  size: number
}
export const PasscodeDot: React.FC<PasscodeDotProps> = ({ filled, color, size }) => (
  <AnimatedBox
    testID={filled ? 'filled-passcode-dot' : 'empty-passcode-dot'}
    width={size}
    height={size}
    borderRadius="round"
    backgroundColor={filled ? color : 'black10'}
  />
)
