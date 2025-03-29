import { createClient } from '@supabase/supabase-js'
import { MongoClient } from 'mongodb'
import neo4j from 'neo4j-driver'
import { createClient as createRedisClient } from 'redis'

// Supabase client
export const createSupabaseClient = (url: string, key: string) => {
  return createClient(url, key)
}

// MongoDB client
export const createMongoClient = (uri: string) => {
  return new MongoClient(uri)
}

// Neo4j client
export const createNeo4jDriver = (uri: string, user: string, password: string) => {
  return neo4j.driver(uri, neo4j.auth.basic(user, password))
}

// Redis client
export const createRedis = (url: string) => {
  return createRedisClient({ url })
}

// Export types
export * from './types' 