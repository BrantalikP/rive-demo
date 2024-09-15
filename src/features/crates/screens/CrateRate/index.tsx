import { router } from 'expo-router'
import * as React from 'react'
import Animated from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { RatingButton } from './components/RatingButton'
import { ScreenStack } from './components/ScreenStack'
import { SpeechBubbleWithCharacter } from './components/SpeechBubbleWithCharacter'
import { useCrateRateStyles } from './styles'
import { RatingBadge } from '../CratesOverview/components/Crate/parts/RatingBadge'
import { CrateProgress } from '../CratesOverview/components/CrateProgress'
import { DATA } from '../CratesOverview/mocks/sections'

import { BackButton } from '~/features/navigation/components/BackButton'
import { LikeRating } from '~/features/ratings/components/LikeRating'
import { LoveRating } from '~/features/ratings/components/LoveRating'
import { MehRating } from '~/features/ratings/components/MehRating'
import { Box } from '~/features/ui/components/Box'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

export const CrateRate = () => {
  const insets = useSafeAreaInsets()
  const mocks = DATA[0].data[0]

  const { animatedEmojiStyle, animateEmoji, emojiTargetRef, selectedEmoji } = useCrateRateStyles()

  return (
    <>
      <ScreenStack />
      <Box position="absolute" style={{ top: insets.top, left: ms(16) }} zIndex={100}>
        <BackButton />
      </Box>
      <Box style={{ paddingTop: insets.top + ms(32), paddingBottom: insets.bottom }}>
        <Box width="100%" alignItems="center">
          <Pressable
            alignItems="center"
            justifyContent="center"
            onPress={() =>
              router.push({
                pathname: '/crate-detail',
                params: { crateOrderId: mocks.id },
              })
            }
          >
            {/* FIXME: Remove this when we have a real crate data */}
            <CrateProgress completionDate="2024-06-01" crateImage={mocks.crateImage} />
            <RatingBadge rating={null} hasPlusSymbol={false} ref={emojiTargetRef} />
            <Text mb="s" variant="labelBold" color="labs">
              {mocks.crateName}
            </Text>
          </Pressable>
        </Box>
      </Box>
      <Box mx="auto" style={{ marginBottom: -ms(35), zIndex: 10 }}>
        <SpeechBubbleWithCharacter text="David, how was it?" />
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        p="xl"
        bg="beige"
        m="2xl"
        borderRadius="m"
      >
        <RatingButton
          RatingComponent={MehRating}
          label="Meh"
          ratingType="NEGATIVE"
          onPress={animateEmoji}
        />
        <RatingButton
          RatingComponent={LikeRating}
          label="Good"
          ratingType="NEUTRAL"
          onPress={animateEmoji}
        />
        <RatingButton
          RatingComponent={LoveRating}
          label="Awesome!"
          ratingType="POSITIVE"
          onPress={animateEmoji}
        />
      </Box>

      {selectedEmoji && <Animated.View style={animatedEmojiStyle}>{selectedEmoji}</Animated.View>}
    </>
  )
}
