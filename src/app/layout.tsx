import '../app/styles/globals.css'
import '../app/styles/slider.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastifyProvider } from './Providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'SDS | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <ToastifyProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </ToastifyProvider>
      </body>
    </html>
  )
}
