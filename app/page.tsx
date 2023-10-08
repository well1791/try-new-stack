'use client'

import { useEffect } from 'react'

import PodcastGrid from '~/components/organism/PodcastGrid'
import { fetchPodcasts } from '~/redux/units/podcasts/slice'
import { changeFilterText, getFilterResult } from '~/redux/units/filter/slice'
import { useAppDispatch, useAppSelector } from '~/redux/store'

export default function Home() {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((s) => s.podcasts.list.isLoading)
  const filterText = useAppSelector((s) => s.filter.text)
  const podcasts = useAppSelector((s) => s.filter.result.data)

  useEffect(() => {
    dispatch(fetchPodcasts())
  }, [dispatch])

  useEffect(() => {
    dispatch(getFilterResult())
  }, [dispatch, filterText])

  return (
    <PodcastGrid
      filterName="podcast-filter"
      data={{ podcasts }}
      onFilterChange={(s) => dispatch(changeFilterText(s))}
      isLoading={isLoading}
    />
  )
}
