import { all, fork } from 'redux-saga/effects'

import {
  watchChangeFilterText,
  watchGetFilterResult,
} from './units/filter/sagas'

export function* rootSaga () {
  yield all([
    fork(watchChangeFilterText),
    fork(watchGetFilterResult),
  ])
}

export default rootSaga
