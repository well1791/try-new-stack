import type { DataState } from '~/redux/types'
import type { PodcastSummary } from '~/redux/units/podcasts/types'

export type FilterState = {
  text: string
  result: DataState<Array<PodcastSummary>>
}

export const FILTER = 'filter'
export type FILTER = typeof FILTER

export const CHANGE_TEXT = 'changeFilterText'
export const FQN_CHANGE_TEXT = `${FILTER}/${CHANGE_TEXT}`
export type FQN_CHANGE_TEXT = typeof FQN_CHANGE_TEXT
