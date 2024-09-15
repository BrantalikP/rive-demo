import { useMarkComplete } from './hooks/useMarkComplete'
import { Reward } from './parts/Reward'

import { KiwiAvatar } from '~/components/KiwiAvatarLegacy'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Text } from '~/features/ui/components/Text'
import { TextBubble } from '~/features/ui/components/TextBubble'
import { ms } from '~/utils/scale'

export const MarkComplete = ({ crateOrderId }: { crateOrderId: number }) => {
  const { pointAnimatedStyle, handlePress, isLoading } = useMarkComplete()
  return (
    <Box px="xl" pt="xl">
      <Box flexDirection="row">
        <KiwiAvatar />
        <Box ml="s" flex={1}>
          <TextBubble>
            <Text variant="labelBold">Hi David,</Text>
            <Text variant="label" mx="2xs">
              what's the
            </Text>
            <Text variant="labelBold">progress</Text>
            <Text ml="2xs" variant="label">
              on the building?
            </Text>
          </TextBubble>
          <Button
            mt="sm"
            label={<Reward animatedStyles={pointAnimatedStyle} />}
            onPress={() => handlePress({ crateOrderId })}
            disabled={isLoading}
          />
        </Box>
      </Box>
      <Box height={ms(2)} mt="xl" width="100%" backgroundColor="beigeDarker" />
    </Box>
  )
}
