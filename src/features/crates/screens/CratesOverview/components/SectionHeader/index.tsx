import { ComponentProps } from 'react'

import { HeaderContainer } from '~/features/crates/screens/CratesOverview/components/SectionHeader/parts/HeaderContainer'
import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { useTheme } from '~/features/ui/theme/useTheme'
import { ms } from '~/utils/scale'

interface ISectionHeader {
  title: string
  description: string
  style?: ComponentProps<typeof Box>['style']
}
export const SectionHeader = ({ title, description, style = {} }: ISectionHeader) => {
  return (
    <Box
      width="100%"
      alignItems="center"
      height={ms(88)}
      justifyContent="center"
      style={[
        {
          marginTop: ms(30),
        },
        style,
      ]}
    >
      <Text variant="hmd" color="white">
        {title}
      </Text>
      <Text variant="label" color="labsLight">
        {description}
      </Text>
      <HeaderContainer />
    </Box>
  )
}
