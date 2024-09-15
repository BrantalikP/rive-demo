import * as z from 'zod'

export const editingSchema = z.object({
  first_name: z.string({
    required_error: 'Name is required',
  }),
  last_name: z.string({
    required_error: 'Name is required',
  }),
  month: z
    .string({
      required_error: 'Month is required',
    })
    .regex(/^(0[1-9]|1[0-2])$/, 'Month must be between 01 and 12'),
  day: z
    .string({
      required_error: 'Day is required',
    })
    .regex(/^(0[1-9]|[12]\d|3[01])$/, 'Day must be between 01 and 31'),
  year: z
    .string({
      required_error: 'Year is required',
    })
    .regex(/^\d{4}$/, 'Year must be a 4-digit number'),
})
