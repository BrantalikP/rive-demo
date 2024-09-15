import { Box } from '~/features/ui/components/Box'
import { Pressable } from '~/features/ui/components/Pressable'
import { ms } from '~/utils/scale'

export const FeedbackOption = ({
  children,
  onPress,
  selected,
}: {
  children: React.ReactNode
  onPress: () => void
  selected: boolean
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ minHeight: ms(165) }}
      backgroundColor={selected ? 'green10' : 'beige'}
      borderWidth={3}
      borderColor={selected ? 'green' : 'beige'}
      p="xl"
      borderRadius="l"
      flex={1}
      alignItems="center"
    >
      <Box gap="2sm">{children}</Box>
    </Pressable>
  )
}
