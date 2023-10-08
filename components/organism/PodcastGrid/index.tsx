'use client'

import * as st from './index.css'
import FilterBox from '~/components/molecule/FilterBox'
import PodcastGridItem from '~/components/molecule/PodcastGridItem'
import type {
  Data as PodcastGridItemData
} from '~/components/molecule/PodcastGridItem'

export type Data = {
  podcasts: Array<PodcastGridItemData>
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
            <PodcastGridItem data={podcast} />
          </li>
        ))}
      </ul>
    </section>
  )
}
