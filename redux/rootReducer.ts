import podcastsReducer from './features/podcasts/slice'
import filterReducer from './features/filter/slice'
import { PodcastsState } from './features/podcasts/types'
import { FilterState } from './features/filter/types'

export type StateType = {
  podcasts: PodcastsState
  filter: FilterState
}

const rootReducer = {
  podcasts: podcastsReducer,
  filter: filterReducer,
}

export default rootReducer
