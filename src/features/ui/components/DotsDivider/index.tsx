import { ComponentProps } from 'react'

import { Box } from '../Box'

import { ms } from '~/utils/scale'

export const DotsDivider = (props: ComponentProps<typeof Box>) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" {...props}>
      {new Array(32).fill(0).map((_, i) => {
        return (
          <Box
            key={i}
            height={ms(2)}
            width={ms(2)}
            backgroundColor="black20"
            borderRadius="round"
          />
        )
      })}
    </Box>
  )
}
