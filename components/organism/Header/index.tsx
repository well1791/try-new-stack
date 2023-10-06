'use client'

import Link from 'next/link'

import * as st from './index.css'
import Heading from '~/components/atom/Heading'
import route from '~/routing'

export type Props = {}

export default function Header({}: Props) {
  return (
    <header className={st.container}>
      <Heading>
        <Link href={ route.home.makeUrl()}>
          Podcaster
        </Link>
      </Heading>
      <div className={st.divider} />
    </header>
  )
}
