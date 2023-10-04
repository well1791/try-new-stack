import type { Metadata } from 'next'

import './globals.css'
import * as st from './layout.css'
import Header from '~/components/organism/Header'

export const metadata: Metadata = {
  title: 'Podcaster',
  description: 'Podcaster landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={st.container}>
        <Header />
        {children}
      </body>
    </html>
  )
}
