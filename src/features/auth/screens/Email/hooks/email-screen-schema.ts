import * as z from 'zod'

export const emailScreenSchema = z.object({
  email: z
    .string({
      required_error: 'Please enter the email you used with KiwiCo',
    })
    .email({
      message: 'Please enter the email you used with KiwiCo',
    }),
})
