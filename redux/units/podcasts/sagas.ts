import { undo } from 'saga-query'
import { takeLatest } from 'redux-saga/effects'

import { FQN_STOP_FETCH } from './types'

export function* stopLatestFetch() {
  yield undo()
}

export function* watchStopFetch() {
  yield takeLatest(FQN_STOP_FETCH, stopLatestFetch)
}
