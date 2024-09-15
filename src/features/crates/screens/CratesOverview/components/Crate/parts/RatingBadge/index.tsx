import React, { ComponentProps, forwardRef } from 'react'
import { View } from 'react-native'

import { CrateReviewInput } from '~/api/generated/apiSchemas'
import {
  INNER_RADIUS,
  OUTER_RADIUS,
} from '~/features/crates/screens/CratesOverview/components/Crate/parts/RatingBadge/presets'
import {
  IMAGE_SIZE,
  TEXT_MARGIN,
} from '~/features/crates/screens/CratesOverview/components/CrateProgress/presets'
import { AddRating } from '~/features/ratings/components/AddRating'
import { LikeRating } from '~/features/ratings/components/LikeRating'
import { LoveRating } from '~/features/ratings/components/LoveRating'
import { MehRating } from '~/features/ratings/components/MehRating'
import { Box } from '~/features/ui/components/Box'
import { Svg } from '~/features/ui/components/Svg'
import { useTheme } from '~/features/ui/theme/useTheme'

type Rating = CrateReviewInput['rating']

type GetRating = {
  [key in Rating]: (props: ComponentProps<typeof Svg>) => React.JSX.Element
}

const getRating: GetRating = {
  NEGATIVE: MehRating,
  NEUTRAL: LikeRating,
  POSITIVE: LoveRating,
}

export const RatingBadge = forwardRef<
  View,
  {
    rating?: Rating | null
    hasPlusSymbol?: boolean
  }
>(({ rating, hasPlusSymbol = true }, ref) => {
  const { spacing } = useTheme()
  return (
    <Box
      position="absolute"
      zIndex={999}
      right={spacing.s}
      top={IMAGE_SIZE - TEXT_MARGIN}
      width={OUTER_RADIUS}
      height={OUTER_RADIUS}
      borderRadius="round"
      backgroundColor="primaryBackground"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        alignItems="center"
        backgroundColor="secondaryBackground"
        justifyContent="center"
        position="absolute"
        zIndex={999}
        width={INNER_RADIUS}
        height={INNER_RADIUS}
        borderRadius="round"
      >
        <View ref={ref} />
        {rating ? getRating[rating]({}) : <AddRating hasPlusSymbol={hasPlusSymbol} />}
      </Box>
    </Box>
  )
})

RatingBadge.displayName = 'RatingBadge'
