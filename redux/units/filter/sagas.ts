import { delay, put, takeLatest, select } from 'redux-saga/effects'
import type { PayloadAction } from '@reduxjs/toolkit'

import { FQN_CHANGE_TEXT } from './types'
import { startFilter, setFilterText, setFilterResultSuccess } from './slice'
import { SECONDS } from '~/redux/utils'
import type { FilterState } from './types'
import type { PodcastsState } from '~/redux/units/podcasts/types'

const includes = (filter: string) => (text: string) =>
  filter === filter.toLowerCase()
    ? text.toLowerCase().includes(filter)
    : text.includes(filter)

function* changeFilterText({ payload }: PayloadAction<string>) {
  yield put(startFilter())
  yield delay(.5 * SECONDS)
  const filterText = payload.trim()
  yield put(setFilterText(filterText))
  const podcastsById: PodcastsState = yield select((s) => s.podcasts)
  const podcasts = Array.from(podcastsById.data?.values() ?? [])
  const result: FilterState['result']['data'] = filterText === ''
    ? podcasts
    : podcasts.filter((p) => [p.title, p.author].some(includes(filterText)))
  yield put(setFilterResultSuccess(result))
}

export function* watchChangeFilterText() {
  yield takeLatest(FQN_CHANGE_TEXT, changeFilterText)
}
