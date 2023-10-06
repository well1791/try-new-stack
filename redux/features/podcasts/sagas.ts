import { call, put, takeLatest } from 'redux-saga/effects'
import type { PayloadAction } from '@reduxjs/toolkit'

import api from '~/service/podcast'
import {
  getPodcastsError,
  getPodcastsSuccess,
  getPodcastByIdError,
  getPodcastByIdSuccess,
} from './slice'
import { FQN_GET_PODCASTS, FQN_GET_PODCAST_BY_ID } from './types'
import {
  fromPodcastsEntryToPodcastSummary,
  fromPodcastsResultToPodcastById,
} from './presenter'
import type { ApiPodcastsResponse, ApiPodcastResponse } from '~/service/podcast'


// podcasts summary
function* getPodcasts() {
  try {
    const { data: d }: ApiPodcastsResponse = yield call(api.fetchPodcasts)
    if (d) {
      const podcasts = d.feed.entry.map(fromPodcastsEntryToPodcastSummary)
      console.log(podcasts)
      yield put(getPodcastsSuccess(podcasts))
    } else {
      yield put(getPodcastsError(['No data was found']))
    }
  } catch (error) {
    const payload = Array.isArray(error) ? error : [String(error)]
    yield put(getPodcastsError(payload))
  }
}

export function* watchGetPodcasts() {
  yield takeLatest(FQN_GET_PODCASTS, getPodcasts)
}

// podcasts summary
function* getPodcastById({ payload: id }: PayloadAction<string>) {
  try {
    const response: ApiPodcastResponse = yield call(api.fetchPodcast, id)
    console.log(response)
    // yield put(getPodcastByIdSuccess());
  } catch (error) {
    const err = Array.isArray(error) ? error : [String(error)]
    yield put(getPodcastByIdError(err))
  }
}

export function* watchGetPodcastById() {
  yield takeLatest(FQN_GET_PODCAST_BY_ID, getPodcastById)
}
