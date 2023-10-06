import { delay, put, takeLatest, select } from 'redux-saga/effects'
import type { PayloadAction } from '@reduxjs/toolkit'

import { FQN_GET_RESULT, FQN_CHANGE_TEXT } from './types'
import type { FilterResultData } from './types'
import {
  storeFilterText,
  getFilterResultSuccess,
  getFilterResultError,
} from './slice'

function* changeFilterText({ payload }: PayloadAction<string>) {
  delay(500)
  yield put(storeFilterText(payload.trim()))
}

export function* watchchangeFilterText() {
  yield takeLatest(FQN_CHANGE_TEXT, changeFilterText)
}

function* getFilterResult() {
  try {
    // const userId: string = yield select((s) => s.filter.text)
    // const userId = yield select((s) => s.filter.text)
    const result: FilterResultData = {}
    yield put(getFilterResultSuccess(result))
  } catch (error) {
    const err = Array.isArray(error) ? error : [String(error)]
    yield put(getFilterResultError(err))
  }
}

export function* watchGetFilterResult() {
  yield takeLatest(FQN_GET_RESULT, getFilterResult)
}
