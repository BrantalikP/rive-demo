import * as React from 'react'

import { RatingEmojiWrapper } from '../RatingEmojiWrapper'

import { Box } from '~/features/ui/components/Box'
import { Pressable } from '~/features/ui/components/Pressable'
import { Text } from '~/features/ui/components/Text'
import { ms } from '~/utils/scale'

type RatingType = 'NEGATIVE' | 'NEUTRAL' | 'POSITIVE'

interface RatingButtonProps {
  RatingComponent: React.ComponentType<{ width: number; height: number }>
  label: string
  ratingType: RatingType
  onPress: (component: React.ReactNode, type: RatingType) => void
}

export const RatingButton: React.FC<RatingButtonProps> = ({
  RatingComponent,
  label,
  ratingType,
  onPress,
}) => {
  const handlePress = () => {
    onPress(<RatingComponent width={ms(64)} height={ms(64)} />, ratingType)
  }

  return (
    <Pressable onPress={handlePress}>
      <Box alignItems="center" gap="s">
        <RatingEmojiWrapper>
          <RatingComponent width={ms(64)} height={ms(64)} />
        </RatingEmojiWrapper>
        <Text>{label}</Text>
      </Box>
    </Pressable>
  )
}
