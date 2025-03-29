export interface DateFormatOptions {
  format?: string
  includeTime?: boolean
}

export interface ValidationResult {
  isValid: boolean
  errors?: string[]
}

export interface FormatOptions {
  truncate?: number
  lowercase?: boolean
  uppercase?: boolean
} 