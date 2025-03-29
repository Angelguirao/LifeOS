import { z } from 'zod'

export const aiAnalysisSchema = z.object({
  text: z.string(),
  sentiment: z.number(),
  topics: z.array(z.string()),
  summary: z.string().optional()
})

export type AIAnalysis = z.infer<typeof aiAnalysisSchema>

export interface VectorSearchResult {
  id: string
  score: number
  metadata: Record<string, any>
} 