import { anniversary } from '@/lib/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getThisYearAnniversary() {
  const year = new Date().getFullYear()
  const month = anniversary.getMonth()
  const date = anniversary.getDate()
  return new Date(year, month, date)
}
