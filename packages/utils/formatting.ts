import type { FormatOptions } from './types'

export const formatText = (text: string, options: FormatOptions = {}) => {
  let formatted = text

  if (options.truncate && text.length > options.truncate) {
    formatted = text.slice(0, options.truncate) + '...'
  }

  if (options.lowercase) {
    formatted = formatted.toLowerCase()
  }

  if (options.uppercase) {
    formatted = formatted.toUpperCase()
  }

  return formatted
}

export const formatNumber = (num: number, decimals = 2) => {
  return num.toFixed(decimals)
} 