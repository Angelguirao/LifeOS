import { z } from 'zod'
import type { ValidationResult } from './types'

export const validateEmail = (email: string): ValidationResult => {
  const result = z.string().email().safeParse(email)
  return {
    isValid: result.success,
    errors: !result.success ? [result.error.message] : undefined
  }
}

export const validateRequired = (value: any): ValidationResult => {
  return {
    isValid: value !== undefined && value !== null && value !== '',
    errors: value ? undefined : ['This field is required']
  }
} 