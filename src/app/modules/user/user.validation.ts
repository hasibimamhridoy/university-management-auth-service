import { z } from 'zod'

export const crateUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required - Ami Zod'
    }),
    password: z.string().optional()
  })
})
