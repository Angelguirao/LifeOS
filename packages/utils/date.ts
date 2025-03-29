import { format, parseISO } from 'date-fns'

export const formatDate = (date: string | Date) => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, 'PPP')
}

export const formatDateTime = (date: string | Date) => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, 'PPP p')
} 