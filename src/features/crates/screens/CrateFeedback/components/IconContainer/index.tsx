import * as React from 'react'

import { Box } from '~/features/ui/components/Box'
import { ms } from '~/utils/scale'

export const IconContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      backgroundColor="white"
      width={ms(67)}
      height={ms(67)}
      borderRadius="round"
      justifyContent="center"
      alignItems="center"
      shadowColor="black50"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.25}
      shadowRadius={4}
      mx="auto"
    >
      {children}
    </Box>
  )
}
