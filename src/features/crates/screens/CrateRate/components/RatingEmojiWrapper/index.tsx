import * as React from 'react'

import { Box } from '~/features/ui/components/Box'
import { ms } from '~/utils/scale'

export const RatingEmojiWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      p="3xs"
      bg="beigeDarker"
      borderRadius="round"
      justifyContent="center"
      alignItems="center"
      style={{
        paddingBottom: ms(3),
      }}
    >
      <Box p="2xs" bg="white" borderRadius="round" justifyContent="center" alignItems="center">
        {children}
      </Box>
    </Box>
  )
}
