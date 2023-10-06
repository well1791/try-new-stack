import type { Metadata } from 'next'

import './globals.css'
import * as st from './layout.css'
import Header from '~/components/organism/Header'
import ReduxProvider from '~/redux/provider'

export const metadata: Metadata = {
  title: 'Podcaster',
  description: 'Podcaster landing page',
}

export type Props = React.PropsWithChildren<{}>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={st.container}>
        <ReduxProvider>
          <Header />
          <main className={st.content}>
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
