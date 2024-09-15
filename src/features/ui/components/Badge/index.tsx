import { ComponentProps } from 'react'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'

interface Props extends ComponentProps<typeof Box> {
  label: string
}

export const Badge = ({ label, ...props }: Props) => {
  return (
    <Box alignSelf="center">
      <Box
        backgroundColor="yellow"
        borderColor="yellowDarker"
        borderWidth={2}
        borderRadius="round"
        paddingHorizontal="sm"
        paddingVertical="xs"
        alignSelf="flex-start" // hack to set the correct width
        {...props}
      >
        <Text textTransform="uppercase" variant="labelSmallBold" textAlign="center">
          {label}
        </Text>
      </Box>
    </Box>
  )
}
