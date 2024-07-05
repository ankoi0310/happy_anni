import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Chúc mừng kỷ niệm ❤️',
  description: 'Đây là một trang web đơn giản để chúc mừng kỷ niệm ❤️',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'dark'} suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
