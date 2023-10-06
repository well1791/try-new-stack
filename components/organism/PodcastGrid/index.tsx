'use client'

import * as st from './index.css'
import FilterBox from '~/components/molecule/FilterBox'
import PodcastCard from '~/components/molecule/PodcastCard'
import type { Data as PodcastCardData } from '~/components/molecule/PodcastCard'

export type Data = {
  podcasts: Array<PodcastCardData>
}

export type Props = {
  data: Data
  onFilterChange: (v: string) => void
  filterName: string
  isLoading?: boolean
}

export default function PodcastGrid({
  data: d,
  filterName,
  onFilterChange,
  isLoading = false,
}: Props) {
  return (
    <section className={st.container}>
      <FilterBox
        autoFocus
        name={filterName}
        isDisabled={isLoading}
        className={st.filterBox}
        countItems={d.podcasts.length}
        placeholder="Filter podcasts..."
        onChange={(e) => onFilterChange(e.currentTarget.value)}
      />

      <ul className={st.cards}>
        {d.podcasts.map((podcast) => (
          <li key={podcast.id}>
            <PodcastCard data={podcast} />
          </li>
        ))}
      </ul>
    </section>
  )
}
