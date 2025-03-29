import { z } from 'zod'

// User schema
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  role: z.enum(['OWNER', 'COLLABORATOR', 'VIEWER'])
})

// Event schema
export const eventSchema = z.object({
  id: z.string(),
  type: z.string(),
  timestamp: z.string().datetime(),
  data: z.record(z.any()),
  userId: z.string(),
  metadata: z.record(z.any()).optional()
})

export type User = z.infer<typeof userSchema>
export type Event = z.infer<typeof eventSchema> 