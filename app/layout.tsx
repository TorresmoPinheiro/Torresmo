import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Torresmo Pinheiro',
  description: 'Pagina comercial torresmo pinheiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="bg-orange-900">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
