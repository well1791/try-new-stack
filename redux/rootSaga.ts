import { all, fork } from 'redux-saga/effects'

import { watchChangeFilterText } from './units/filter/sagas'
import { watchStopFetch } from './units/podcasts/sagas'

export function* rootSaga () {
  yield all([
    fork(watchChangeFilterText),
    fork(watchStopFetch),
  ])
}

export default rootSaga
