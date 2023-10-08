import type { DataState } from '~/redux/types'

export type Episode = {
  id: string
  title: string
  date: string
  duration: string
  description: string
}

export type PodcastSummary = {
  id: string
  title: string
  author: string
  description: string
  img: {
    src: string
    alt: string
  }
  episodes?: Array<Episode>,
}

export type PodcastsMapData = Map<string, PodcastSummary>
export type PodcastsState = DataState<PodcastsMapData | undefined>

export const NAMESPACE = 'podcasts'
export type NAMESPACE = typeof NAMESPACE

export const STOP_FETCH = 'stopFetch'
export const FQN_STOP_FETCH = `${NAMESPACE}/${STOP_FETCH}`
