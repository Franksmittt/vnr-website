import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VNR | Strategic Wealth & Tax Advisory',
  description: 'Facilitating sustainable wealth through relevant knowledge and cutting-edge technology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {/* This {children} renders your page content. It must only appear ONCE. */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}