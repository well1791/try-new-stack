'use client'

import { useEffect } from 'react'

import router from '~/router'
import PodcastPage from '~/components/template/PodcastPage'
import {
  fetchEpisodesByPodcastId,
  stopFetch,
} from '~/redux/units/podcasts/slice'
import { useAppDispatch, useAppSelector } from '~/redux/store'

type Props = {
  params: { podcastId: string }
}

export default function Podcast({ params: { podcastId } }: Props) {
  const dispatch = useAppDispatch()
  const podcastsById = useAppSelector((s) => s.podcasts.data)
  const podcast = podcastsById?.get(podcastId)
  const makeEpisodeUrl = (episodeId: string) =>
    router.podcast.episode.makeUrl({ podcastId, episodeId })

  useEffect(() => {
    dispatch(fetchEpisodesByPodcastId({ id: podcastId }))
    return () => {
      // dispatch(stopFetch()) // not working properly
    }
  }, [dispatch, podcastId])

  if (podcastsById && podcastId in podcastsById) {
    console.log('maybe use an endpoint to fetch podcast info first then episodes')
  }

  return (
    <PodcastPage
      makeEpisodeUrl={makeEpisodeUrl}
      data={{ episodes: podcast?.episodes ?? [] }}
    />
  )
}
