import Link from 'next/link'

import * as st from './index.css'

export type Episode = {
  id: string
  title: string
  date: string
  duration: string
}

export type Data = {
  episodes: Array<Episode>
}

export type Props = {
  data: Data
  makeEpisodeUrl: (id: string) => string
}

export default function PodcastPage({ data: d, makeEpisodeUrl }: Props) {
  return (
    <section className={st.container}>
      <p className={st.title}>
        Episodes: {d.episodes.length}
      </p>

      <table className={st.table}>
        <thead>
          <tr>
            {['Title', 'Date', 'Duration'].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {d.episodes.map(({ id: episodeId, ...ep }) => (
            <tr key={episodeId}>
              <td>
                <Link href={makeEpisodeUrl(episodeId)}>
                  {ep.title}
                </Link>
              </td>
              <td>{ep.date}</td>
              <td>{ep.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
