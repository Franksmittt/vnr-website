import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// FIX: Assuming you have an AuthProvider. If your file is named something
// different, please update the import path.
// import { AuthProvider } from '../path/to/your/auth/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VNR',
  description: 'Facilitating sustainable wealth through relevant knowledge and cutting-edge technology.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*
          FIX: Wrap your entire application with the AuthProvider.
          This makes the user authentication data available to all components.
        */}
        {/* <AuthProvider> */}
          <Header />
          <main>{children}</main>
          <Footer />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}