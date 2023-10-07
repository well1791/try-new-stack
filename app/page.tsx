'use client'

import { useEffect } from 'react'

import PodcastGrid from '~/components/organism/PodcastGrid'
import { fetchPodcasts } from '~/redux/units/podcasts/slice'
import { changeFilterText, getFilterResult } from '~/redux/units/filter/slice'
import { useAppDispatch, useAppSelector } from '~/redux/store'

export default function Home() {
  const dispatch = useAppDispatch()
  const podcastsList = useAppSelector((s) => s.podcasts.list)
  const filterText = useAppSelector((s) => s.filter.text)
  const filterResult = useAppSelector((s) => s.filter.result)

  useEffect(() => {
    dispatch(fetchPodcasts())
  }, [dispatch])

  useEffect(() => {
    dispatch(getFilterResult())
  }, [dispatch, filterText])

  return (
    <PodcastGrid
      filterName="podcast-filter"
      data={{ podcasts: filterResult.data}}
      onFilterChange={(s: string) => dispatch(changeFilterText(s))}
      isLoading={podcastsList.isLoading || filterResult.isLoading}
    />
  )
}
