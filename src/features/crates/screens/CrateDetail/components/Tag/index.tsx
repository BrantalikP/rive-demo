import { ReactNode } from 'react'

import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

interface ITag {
  label: string
  icon: ReactNode
}
export const Tag = ({ label, icon }: ITag) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor="primaryBackground"
      borderRadius="l"
      paddingHorizontal="sm"
      borderColor="beigeDarker"
      paddingVertical="s"
      borderWidth={ms(2)}
    >
      {icon}
      <Text variant="labelSmallBold" ml="s">
        {label}
      </Text>
    </Box>
  )
}
