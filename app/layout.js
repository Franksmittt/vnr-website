import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.vnr.co.za'),
  title: 'VNR | Financial & Advisory Services in South Africa',
  description: 'Facilitating sustainable wealth through relevant knowledge and cutting-edge technology.',
  keywords: 'tax compliance, payroll services, cloud accounting, business valuations, South Africa, VNR, financial advisory',
  openGraph: {
    title: 'VNR | Financial & Advisory Services in South Africa',
    description: 'Expert financial and advisory services for South African businesses.',
    url: 'https://www.vnr.co.za',
    siteName: 'VNR',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'VNR Financial Services' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNR | Financial & Advisory Services in South Africa',
    description: 'Expert financial and advisory services for South African businesses.',
    image: '/images/twitter-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}