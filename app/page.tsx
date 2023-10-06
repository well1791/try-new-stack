'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import PodcastGrid from '~/components/organism/PodcastGrid'
import { getPodcasts } from '~/redux/features/podcasts/slice'
import { changeFilterText, getFilterResult } from '~/redux/features/filter/slice'
import { AppDispatch, useState } from '~/redux/store'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const podcasts = useState((s) => s.podcasts.list)
  const { text: filterText, result: filterResult } = useState((s) => s.filter)
  // const filterText = useAppSelector((s) => s.filter.text)

  useEffect(() => {
    dispatch(getPodcasts())
  }, [])

  return (
    <PodcastGrid
      filterName="podcast-filter"
      data={{ podcasts: podcasts.data ?? [] }}
      onFilterChange={(s: string) => dispatch(changeFilterText(s))}
      isLoading={podcasts.isLoading || filterResult.isLoading}
    />
  )
}
