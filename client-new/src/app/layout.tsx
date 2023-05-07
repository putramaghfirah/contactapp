import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/global.css'

import Providers from '@/components/theme/Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Contact App',
    absolute: 'Contact App',
  },
  description: 'Contact App to manage your contacts',
  icons: {
    icon: [{ url: '/favicon.ico', rel: 'icon' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-white dark:bg-gray-950`}
      >
        <Providers>
          <Navbar />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
