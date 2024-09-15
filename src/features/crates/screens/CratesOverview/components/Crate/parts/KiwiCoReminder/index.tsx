import { router } from 'expo-router'

import { KiwiAvatar } from '~/features/crates/screens/CratesOverview/components/Crate/parts/KiwiAvatar'
import { KIWI_AVATAR_WIDTH } from '~/features/crates/screens/CratesOverview/components/Crate/parts/KiwiAvatar/presets'
import { SpeechBubble } from '~/features/crates/screens/CratesOverview/components/Crate/parts/SpeechBubble'
import { IMAGE_SIZE } from '~/features/crates/screens/CratesOverview/components/CrateProgress/presets'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

export const KiwiCoReminder = ({ left, crateOrderId }: { left: boolean; crateOrderId: number }) => {
  const style = left
    ? { left: -KIWI_AVATAR_WIDTH, transform: [{ scaleX: -1 }] }
    : { right: -KIWI_AVATAR_WIDTH }

  return (
    <Box
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="flex-end"
      bottom={IMAGE_SIZE}
      position="absolute"
      {...style}
    >
      <Pressable onPress={() => console.log('Tell Me')} left={ms(25)}>
        <SpeechBubble
          right={ms(2)}
          opacity={0.2}
          top={ms(2)}
          fillColor="#F05824"
          position="absolute"
        />
        <SpeechBubble />
        <Box
          alignItems="center"
          justifyContent="center"
          width="100%"
          top={ms(14)}
          flexDirection="row"
          position="absolute"
          style={{ transform: [{ scaleX: left ? -1 : 1 }] }}
          gap="m"
        >
          <Text variant="speechBubbleText">How was it?</Text>
          <Button
            onPress={() =>
              router.navigate({
                pathname: '/crate-rate',
                params: {
                  crateOrderId,
                },
              })
            }
            innerContainerStyle={{
              height: ms(40),
              justifyContent: 'center',
              paddingVertical: 0,
            }}
            label="Tell me"
          />
        </Box>
      </Pressable>
      <KiwiAvatar />
    </Box>
  )
}
