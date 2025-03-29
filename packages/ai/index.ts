import OpenAI from 'openai'

export const createOpenAIClient = (apiKey: string) => {
  return new OpenAI({ apiKey })
}

export const createPineconeClient = async (apiKey: string, environment: string) => {
  const { PineconeClient } = await import('@pinecone-database/pinecone')
  const pinecone = new PineconeClient()
  await pinecone.init({
    apiKey,
    environment
  })
  return pinecone
}

// Export types
export * from './types' 