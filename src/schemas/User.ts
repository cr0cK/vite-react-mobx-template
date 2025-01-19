import { z } from 'zod'

export const userEntitySchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional()
})

export type UserEntityRaw = z.infer<typeof userEntitySchema>
