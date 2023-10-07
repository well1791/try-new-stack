import { all, fork } from 'redux-saga/effects'

import {
  watchFetchPodcasts,
  watchFetchPodcastById,
} from './features/podcasts/sagas'
import {
  watchChangeFilterText,
  watchGetFilterResult,
} from './features/filter/sagas'

export function* rootSaga () {
  yield all([
    fork(watchFetchPodcasts),
    fork(watchFetchPodcastById),
    fork(watchChangeFilterText),
    fork(watchGetFilterResult),
  ])
}

export default rootSaga
