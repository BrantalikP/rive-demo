import * as z from 'zod'

import { emailScreenSchema } from '../../Email/hooks/email-screen-schema'

const passwordSchema = z.object({
  password: z
    .string({
      required_error: 'Please enter your password',
    })
    .min(4, 'Password must be at least 4 characters'),
})

const passwordScreenSchema = emailScreenSchema.merge(passwordSchema)

export { passwordScreenSchema }
