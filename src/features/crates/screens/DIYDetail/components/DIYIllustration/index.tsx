import { Box } from '~/features/ui/components/Box'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

export const DIYIllustration = ({ icon, label }: { icon: React.ReactNode; label?: string }) => {
  return (
    <Box alignItems="center" flexDirection="column" justifyContent="center" gap="s">
      <Box
        style={{ width: ms(57), height: ms(56) }}
        alignItems="center"
        justifyContent="center"
        borderRadius="round"
        borderWidth={ms(2)}
        borderColor="beigeDarker"
        overflow="hidden"
      >
        {icon}
      </Box>
      <Text variant="labelSmallBold">{label}</Text>
    </Box>
  )
}
