import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { UserOrderProvider } from './context/UserOrderContext'
import { OrdersProvider } from './context/OrdersContext'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
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
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserOrderProvider>
          <OrdersProvider>
            <Navbar />
            {children}
          </OrdersProvider>
        </UserOrderProvider>
      </body>
    </html>
  )
}
