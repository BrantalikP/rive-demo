import { ComponentProps } from 'react'

import { ChatArrow } from './parts/ChatArrow'

import { Box } from '~/features/ui/components/Box'
import { ms } from '~/utils/scale'

interface ITextBubble extends ComponentProps<typeof Box> {}
export const TextBubble = ({ children, ...restProps }: ITextBubble) => {
  return (
    <Box
      borderWidth={ms(2)}
      borderColor="beigeDarker"
      position="relative"
      borderRadius="m"
      backgroundColor="secondaryBackground"
      flexWrap="wrap"
      flexDirection="row"
    >
      <ChatArrow />
      <Box
        py="sm"
        px="m"
        borderRadius="m"
        backgroundColor="secondaryBackground"
        flexWrap="wrap"
        flexDirection="row"
        {...restProps}
      >
        {children}
      </Box>
    </Box>
  )
}
