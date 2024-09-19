import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cart App',
  description: 'the firs cart app focus on marketing',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <p>esto es un layout</p>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
