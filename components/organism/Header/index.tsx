'use client'

import Link from 'next/link'

import * as st from './index.css'
import Heading from '~/components/atom/Heading'
import route from '~/routing'
import { css, cx } from '~/styled-system/css'
import { useAppSelector } from '~/redux/store'

export default function Header() {
  const isLoadingFilter = useAppSelector((s) => s.filter.result.isLoading)
  const isLoadingList = useAppSelector((s) => s.podcasts.list.isLoading)
  const isLoadingPodcast = useAppSelector((s) => s.podcasts.byId.isLoading)
  const isLoading = isLoadingFilter || isLoadingList || isLoadingPodcast
  const cssVar = css(isLoading ? { '--is-loading': 1 } : { '--is-loading': 0 })

  return (
    <header className={cx(st.container, cssVar)}>
      <Heading>
        <Link href={ route.home.makeUrl()}>
          Podcaster
        </Link>
      </Heading>
    </header>
  )
}
