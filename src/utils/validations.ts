import { z } from 'zod'

export const crateOrderIdSchema = z.object({
  crateOrderId: z.coerce.number(),
})

export const validateCrateOrderId = ({ crateOrderId }: { crateOrderId: any }) => {
  return crateOrderIdSchema.safeParse({ crateOrderId })
}

export const crateRatingSchema = z.object({
  rating: z.enum(['NEGATIVE', 'NEUTRAL', 'POSITIVE']),
})

export const validateCrateRating = ({ rating }: { rating: any }) => {
  return crateRatingSchema.safeParse({ rating })
}
