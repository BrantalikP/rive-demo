import { Redirect } from 'expo-router'
import * as React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { FeedbackOptionGroup, FeedbackOptionProps } from './components/FeedbackOptionGroup'
import { Bulb } from './components/Illustrations/Bulb'
import { Easy } from './components/Illustrations/Easy'
import { Hard } from './components/Illustrations/Hard'
import { Heart } from './components/Illustrations/Heart'
import { Medium } from './components/Illustrations/Medium'
import { Puzzle } from './components/Illustrations/Puzzle'
import { ScreenStack } from './components/ScreenStack'
import { SpeechBubbleWithCharacter } from './components/SpeechBubbleWithCharacter'
import { useCrateFeedback } from './hooks/useCrateFeedback'

import { BackButton } from '~/features/navigation/components/BackButton'
import { Box } from '~/features/ui/components/Box'
import { Button } from '~/features/ui/components/Button'
import { ScrollView } from '~/features/ui/components/ScrollView'
import { ms } from '~/utils/scale'

const feedbackOptions: FeedbackOptionProps[] = [
  { type: 'TOO_EASY', icon: Easy, label: 'It was', boldLabel: 'too easy' },
  { type: 'TOO_HARD', icon: Hard, label: 'It was', boldLabel: 'too hard' },
  { type: 'GOOD_CHALLENGE', icon: Medium, label: 'It was a', boldLabel: 'good challenge' },
  { type: 'MISSING_PARTS', icon: Puzzle, label: 'Had', boldLabel: 'missing or broken parts' },
  { type: 'FAVORITE', icon: Heart, label: 'This was my', boldLabel: 'favorite' },
  { type: 'CLEVER', icon: Bulb, label: '', boldLabel: 'Clever!' },
]

export const CrateFeedback = () => {
  const insets = useSafeAreaInsets()
  const { selectedFeedback, toggleFeedback, validatedCrateOrder, validatedRating, submitReview } =
    useCrateFeedback()

  if (!validatedCrateOrder.success || !validatedRating.success) {
    return <Redirect href="/crates-overview" />
  }

  return (
    <>
      <ScreenStack />
      <Box position="absolute" style={{ top: insets.top, left: ms(16) }} zIndex={100}>
        <BackButton />
      </Box>
      <Box
        style={{
          marginTop: insets.top + ms(32),
          marginBottom: insets.bottom || ms(24),
        }}
        marginHorizontal="2xl"
        flex={1}
        justifyContent="space-between"
      >
        <Box mx="auto">
          <SpeechBubbleWithCharacter />
        </Box>
        <Box flex={1} mt="m" mb="2xl">
          <ScrollView showsVerticalScrollIndicator={false}>
            <FeedbackOptionGroup
              options={feedbackOptions}
              selectedFeedback={selectedFeedback}
              toggleFeedback={toggleFeedback}
            />
          </ScrollView>
        </Box>
        <Button
          label="Submit"
          variant={selectedFeedback.length ? 'default' : 'light'}
          disabled={!selectedFeedback.length}
          onPress={() => {
            submitReview({
              pathParams: {
                crateOrderId: validatedCrateOrder.data.crateOrderId,
              },
              body: {
                feedback: selectedFeedback,
                rating: validatedRating.data.rating,
              },
            })
          }}
        />
      </Box>
    </>
  )
}
