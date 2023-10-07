import type { DataState } from '~/redux/types'

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
