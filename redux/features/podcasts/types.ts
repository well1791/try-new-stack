import { DataState } from '~/types/redux'

export type PodcastSummary = {
  id: string
  title: string
  author: string
  img: {
    src: string
    alt: string
  }
}
export type PodcastsSummaryData = Array<PodcastSummary>
export type PodcastsListState = DataState<PodcastsSummaryData | undefined>

export type PodcastById = {
  id: string
}
export type PodcastsByIdData = Record<string, PodcastById>
export type PodcastsByIdState = DataState<PodcastsByIdData>

export type PodcastsState = {
  byId: PodcastsByIdState
  list: PodcastsListState
}

export const NAMESPACE = 'podcasts'
export type NAMESPACE = typeof NAMESPACE

export const FETCH_PODCASTS = 'fetchPodcasts'
export const FQN_GET_PODCASTS = `${NAMESPACE}/${FETCH_PODCASTS}`
export type FQN_GET_PODCASTS = typeof FQN_GET_PODCASTS

export const FETCH_PODCAST_BY_ID = 'fetchPodcastById'
export const FQN_GET_PODCAST_BY_ID = `${NAMESPACE}/${FETCH_PODCAST_BY_ID}`
export type FQN_GET_PODCAST_BY_ID = typeof FQN_GET_PODCAST_BY_ID
