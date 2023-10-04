import Link from 'next/link'

import * as st from './index.css'
import FilterBox from '~/components/molecule/FilterBox'
import PodcastCard from '~/components/molecule/PodcastCard'

export type Props = {}

export default function PodcastGrid({}: Props) {
  return (
    <div className={st.container}>
      <FilterBox className={st.filterBox} countItems={100} />
      <Link href="/podcast/asd">go to podcasts/asd</Link>
      {Array.from({ length: 100 }).map((_, i) => {
        return (
          <PodcastCard key={i} />
        )
      })}
    </div>
  )
}
