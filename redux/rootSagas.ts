import { all, fork } from 'redux-saga/effects'

import {
  watchGetPodcasts,
  watchGetPodcastById,
} from './features/podcasts/sagas'
import {
  watchchangeFilterText,
  watchGetFilterResult,
} from './features/filter/sagas'

export function* rootSaga () {
  yield all([
    fork(watchGetPodcasts),
    fork(watchGetPodcastById),
    fork(watchchangeFilterText),
    fork(watchGetFilterResult),
  ])
}

export default rootSaga
