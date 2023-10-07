import podcastsReducer from './units/podcasts/slice'
import filterReducer from './units/filter/slice'
import { PodcastsState } from './units/podcasts/types'
import { FilterState } from './units/filter/types'

export type StateType = {
  podcasts: PodcastsState
  filter: FilterState
}

const rootReducer = {
  podcasts: podcastsReducer,
  filter: filterReducer,
}

export default rootReducer
