import { delay, put, takeLatest, select } from 'redux-saga/effects'
import type { PayloadAction } from '@reduxjs/toolkit'

import { FQN_GET_RESULT, FQN_CHANGE_TEXT } from './types'
import {
  setFilterText,
  setFilterResultSuccess,
  setFilterResultError,
} from './slice'
import { SECONDS } from '~/redux/utils'
import type { FilterState } from './types'
import type { PodcastsSummaryData } from '~/redux/units/podcasts/types'

function* changeFilterText({ payload }: PayloadAction<string>) {
  yield delay(.5 * SECONDS)
  yield put(setFilterText(payload.trim()))
}

export function* watchChangeFilterText() {
  yield takeLatest(FQN_CHANGE_TEXT, changeFilterText)
}

function includes(filter: string) {
  const isCaseSensitive = filter !== filter.toLowerCase()
  return (text: string) => isCaseSensitive
    ? text.includes(filter)
    : text.toLowerCase().includes(filter)
}

function* getFilterResult() {
  try {
    const filterText: string = yield select((s) => s.filter.text)
    const podcasts: PodcastsSummaryData = yield select(
      (s) => s.podcasts.list.data ?? []
    )
    const result: FilterState['result']['data'] = filterText === ''
      ? podcasts
      : podcasts.filter((p) => [p.title, p.author].some(includes(filterText)))
    yield put(setFilterResultSuccess(result))
  } catch (error) {
    const err = Array.isArray(error) ? error : [String(error)]
    yield put(setFilterResultError(err))
  }
}

export function* watchGetFilterResult() {
  yield takeLatest(FQN_GET_RESULT, getFilterResult)
}
