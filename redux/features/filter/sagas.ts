import { delay, put, takeLatest, select } from 'redux-saga/effects'
import type { PayloadAction } from '@reduxjs/toolkit'

import { FQN_GET_RESULT, FQN_CHANGE_TEXT } from './types'
import {
  setFilterText,
  setFilterResultSuccess,
  setFilterResultError,
} from './slice'
import type { FilterResultData } from './types'
import type { PodcastsSummaryData } from '~/redux/features/podcasts/types'

function* changeFilterText({ payload }: PayloadAction<string>) {
  delay(500)
  yield put(setFilterText(payload.trim()))
}

export function* watchChangeFilterText() {
  yield takeLatest(FQN_CHANGE_TEXT, changeFilterText)
}

function matchFilter(filter: string) {
  const isCaseSensitive = filter !== filter.toLowerCase()
  return (_text: string) => {
    const text = isCaseSensitive ? _text : _text.toLowerCase()
    return text.includes(filter)
  }
}

function* getFilterResult() {
  try {
    const filterText: string = yield select((s) => s.filter.text)
    const podcasts: PodcastsSummaryData = yield select((s) => s.podcasts.list.data)
    const result: FilterResultData = podcasts.reduce((z, x, i) =>
      ([x.title, x.author].some(matchFilter(filterText)))
        ? z.set(x.id, i)
        : z
    , new Map())
    yield put(setFilterResultSuccess(result))
  } catch (error) {
    const err = Array.isArray(error) ? error : [String(error)]
    yield put(setFilterResultError(err))
  }
}

export function* watchGetFilterResult() {
  yield takeLatest(FQN_GET_RESULT, getFilterResult)
}
