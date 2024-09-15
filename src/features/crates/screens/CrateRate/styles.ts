import { router, useLocalSearchParams } from 'expo-router'
import * as React from 'react'
import { View } from 'react-native'
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { CrateReviewInput } from '~/api/generated/apiSchemas'
import { ms } from '~/utils/scale'

export const useCrateRateStyles = () => {
  const { crateOrderId } = useLocalSearchParams()
  const emojiTargetRef = React.useRef<View>(null)
  const [rating, setRating] = React.useState<CrateReviewInput['rating'] | null>(null)

  const [selectedEmoji, setSelectedEmoji] = React.useState<React.ReactNode | null>(null)
  const emojiPosition = useSharedValue({ x: 0, y: 0 })
  const emojiScale = useSharedValue(1)
  const emojiOpacity = useSharedValue(0)

  const animatedEmojiStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: emojiPosition.value.x,
      top: emojiPosition.value.y,
      transform: [
        {
          scale: withSequence(
            withSpring(emojiScale.value, { mass: 0.1 }),
            withSpring(1, { mass: 0.1 }),
            withSpring(emojiScale.value, { mass: 0.1 }),
          ),
        },
      ],
      opacity: withTiming(emojiOpacity.value, { duration: 300 }, (finished) => {
        if (finished && selectedEmoji) {
          runOnJS(router.push)({
            pathname: '/crate-feedback',
            params: {
              rating,
              crateOrderId,
            },
          })
        }
      }),
    } as const
  })

  const animateEmoji = (emoji: React.ReactNode, rating: CrateReviewInput['rating']) => {
    setRating(rating)
    setSelectedEmoji(emoji)
    emojiScale.value = 1
    emojiOpacity.value = 0

    // eslint-disable-next-line max-params
    emojiTargetRef.current?.measure((x, y, width, height, pageX, pageY) => {
      emojiPosition.value = { x: pageX - ms(32), y: pageY - ms(11) }
      emojiScale.value = 0.65
      emojiOpacity.value = 1
    })
  }

  return {
    animatedEmojiStyle,
    animateEmoji,
    emojiTargetRef,
    selectedEmoji,
  }
}
