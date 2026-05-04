import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Шрила Хришикеш Махарадж | Сознание Кришны',
  description: 'Официальный сайт Шрилы Хришикеши Махараджа — ученика Шрилы Говинды Махараджа. Уроки бхакти, лекции, паломничества и служение.',
  keywords: 'Хришикеш Махарадж, Говинда Махарадж, сознание Кришны, бхакти, SCSM, Бхагавад-гита',
  openGraph: {
    title: 'Шрила Хришикеш Махарадж',
    description: 'Путь любви и преданности — уроки сознания Кришны на русском языке',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
