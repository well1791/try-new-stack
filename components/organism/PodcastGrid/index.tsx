import * as st from './index.css'
import FilterBox from '~/components/molecule/FilterBox'
import PodcastCard from '~/components/molecule/PodcastCard'
import type { Data as PodcastCardData } from '~/components/molecule/PodcastCard'

export type Props = {
  data: {
    podcasts: Array<PodcastCardData>
  }
}

export default function PodcastGrid({ data: d }: Props) {
  return (
    <section className={st.container}>
      <FilterBox className={st.filterBox} countItems={100} />
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
