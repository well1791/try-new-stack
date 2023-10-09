'use client'

import Link from 'next/link'

import * as st from './index.css'
import Heading from '~/components/atom/Heading'
import route from '~/router'
import { useAppSelector } from '~/redux/store'

export default function Header() {
  const isLoadingFilter = useAppSelector((s) => s.filter.result.isLoading)
  const isLoadingPodcast = useAppSelector((s) => s.podcasts.isLoading)
  const isLoading = isLoadingPodcast || isLoadingFilter

  return (
    <header className={st.container} data-is-loading={isLoading}>
      <Heading>
        <Link href={route.home.makeUrl()}>
          Podcaster
        </Link>
      </Heading>
    </header>
  )
}
