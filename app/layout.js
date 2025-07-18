import { Inter } from 'next/font/google'
import './globals.css'
// Use relative paths instead of the alias
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

// The rest of the file stays the same...
export const metadata = {
  title: 'VNR',
  description: 'Facilitating sustainable wealth through relevant knowledge and cutting-edge technology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}