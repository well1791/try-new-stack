import type { DataState } from '~/redux/types'
import type { PodcastsSummaryData } from '~/redux/units/podcasts/types'

export type FilterState = {
  text: string
  result: DataState<PodcastsSummaryData>
}

export const FILTER = 'filter'
export type FILTER = typeof FILTER

export const CHANGE_TEXT = 'changeFilterText'
export const FQN_CHANGE_TEXT = `${FILTER}/${CHANGE_TEXT}`
export type FQN_CHANGE_TEXT = typeof FQN_CHANGE_TEXT

export const GET_RESULT = 'getFilterResult'
export const FQN_GET_RESULT = `${FILTER}/${GET_RESULT}`
export type FQN_GET_RESULT = typeof FQN_GET_RESULT
