import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

export const DividerWithText = ({ text }: { text: string }) => {
  return (
    <Box flexDirection="row" alignItems="center" marginVertical="m">
      <Box flex={1} height={ms(1)} backgroundColor="black20" mt="2xs" />
      <Text variant="labelSmall" color="textSecondary" marginHorizontal="s">
        {text}
      </Text>
      <Box flex={1} height={ms(1)} backgroundColor="black20" mt="2xs" />
    </Box>
  )
}
