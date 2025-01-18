import { z } from 'zod'

export const userEntitySchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  email: z.string().email(),
  name: z.string().optional()
})

export type UserEntity = z.infer<typeof userEntitySchema>
