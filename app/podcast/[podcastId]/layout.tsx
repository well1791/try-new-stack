'use client'

import * as st from './layout.css'
import router from '~/router'
import PodcastInfoCard from '~/components/organism/PodcastInfoCard'
import { useAppSelector } from '~/redux/store'

export type Props = React.PropsWithChildren<{
  params: { podcastId: string }
}>

const defaultPodcast = {
  id: 'no-id',
  title: 'Title',
  author: 'Author',
  description: 'description',
}

export default function PodcastLayout({
  children,
  params: { podcastId },
}: Props) {
  const podcastsById = useAppSelector((s) => s.podcasts.data)
  const podcast = podcastsById?.get(podcastId)

  return (
    <div className={st.container}>
      <PodcastInfoCard
        podcastUrl={router.podcast.makeUrl({ podcastId })}
        data={podcast ?? defaultPodcast}
      />
      {children}
    </div>
  )
}
