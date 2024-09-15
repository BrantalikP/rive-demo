import { router, useLocalSearchParams } from 'expo-router'
import * as React from 'react'

import { useCrateControllerSubmitReview } from '~/api/generated/apiComponents'
import { CrateReviewEntity } from '~/api/generated/apiSchemas'
import { validateCrateOrderId, validateCrateRating } from '~/utils/validations'

export type Feedback = CrateReviewEntity['feedback'][number]

export const useCrateFeedback = () => {
  const { rating, crateOrderId } = useLocalSearchParams()

  const [selectedFeedback, setSelectedFeedback] = React.useState<Feedback[]>([])

  const toggleFeedback = (feedback: Feedback) => {
    setSelectedFeedback((prev) =>
      prev.includes(feedback) ? prev.filter((f) => f !== feedback) : [...prev, feedback],
    )
  }

  const validatedCrateOrder = validateCrateOrderId({ crateOrderId })
  const validatedRating = validateCrateRating({ rating })

  const { mutate: submitReview } = useCrateControllerSubmitReview({
    onSuccess: () => {
      router.push({ pathname: '/crates-overview' })
    },
    onError: () => {
      // FIXME: show error when BE for crates is ready
      router.push({ pathname: '/crates-overview' })
    },
  })

  return {
    selectedFeedback,
    toggleFeedback,
    validatedCrateOrder,
    validatedRating,
    submitReview,
    rating,
  }
}
