import { z } from 'zod'

const ApiErrorSchema = z.object({
  message: z.string(),
  statusCode: z.number(),
  error: z.string().optional(),
  stack: z.string().optional(),
})

export type ApiError = z.infer<typeof ApiErrorSchema>

export const isApiError = (error: unknown): error is ApiError => {
  return ApiErrorSchema.safeParse(error).success
}
