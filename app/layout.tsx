import type { Metadata } from 'next'
import { Averia_Serif_Libre, Amiri } from 'next/font/google'
import './globals.css'

const averiaSerifLibre = Averia_Serif_Libre({
  variable: '--font-averia-serif-libre',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const amiri = Amiri({
  variable: '--font-amiri',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${averiaSerifLibre.variable}  antialiased`}>
        {children}
      </body>
    </html>
  )
}
