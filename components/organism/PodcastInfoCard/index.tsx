'use client'

import Link from 'next/link'

import * as st from './index.css'

export type Data = {
  id: string
  title: string
  author: string
  description: string
  img?: string // TODO: USE IT LATER
}

export type Props = {
  data: Data
  podcastUrl: string
}

export default function PodcastInfoCard({ data: d, podcastUrl }: Props) {
  return (
    <article className={st.container}>
      {/* TODO: add a proper image */}
      <div className={st.img}></div>
      <div className={st.divider}></div>
      <Link href={podcastUrl} className={st.title}>
        <h2>{d.title}</h2>
        <p>by {d.author}</p>
      </Link>
      <div className={st.divider}></div>
      <div className={st.description}>
        <h3>Description:</h3>
        <p>{d.description}</p>
      </div>
    </article>
  )
}
