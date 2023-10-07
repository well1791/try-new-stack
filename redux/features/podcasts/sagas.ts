import { put, takeLatest } from 'redux-saga/effects'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useCache } from 'saga-query/react'
import { useDispatch } from 'react-redux'
import { ApiCtx, timer } from 'saga-query'

import api from '~/redux/api'
import {
  setPodcastsError,
  setPodcastsSuccess,
  setPodcastByIdError,
  setPodcastByIdSuccess,
} from './slice'
import { FQN_GET_PODCASTS, FQN_GET_PODCAST_BY_ID } from './types'
import {
  fromPodcastsEntryToPodcastSummary,
  fromPodcastsResultToPodcastById,
} from './presenter'
// import type { ApiPodcastsResponse, ApiPodcastResponse } from '~/service/podcast'
import { HOURS } from '~/redux/utils'

const ONE_DAY_TIMER = timer(24 * HOURS)

export const fetchPodcasts = api.get(
  '/us/rss/toppodcasts/limit=100/genre=1310/json',
  { saga: ONE_DAY_TIMER },
  // function* (ctx: ApiCtx<{ users: User[] }>, next) {
  function* (ctx, next) {
    yield next()
    console.log(ctx)
    console.log('---------------------------------')
    if (!ctx.json.ok) return;
  },
)

export const fetchPodcastById = api.get(
  '/lookup?id=:id&media=podcast&entity=podcastEpisode&limit=20',
  { saga: ONE_DAY_TIMER },
  function* () {
  },
)

// podcasts summary

function* _getPodcasts() {
  try {
    // const { data: d } = yield fetchPodcasts()
    // if (d) {
    //   const podcasts = d.feed.entry.map(fromPodcastsEntryToPodcastSummary)
    //   console.log(podcasts)
    //   yield put(getPodcastsSuccess(podcasts))
    // } else {
    //   yield put(getPodcastsError(['No data was found']))
    // }
  } catch (error) {
    const payload = Array.isArray(error) ? error : [String(error)]
    yield put(setPodcastsError(payload))
  }
}

export function* watchFetchPodcasts() {
  yield takeLatest(FQN_GET_PODCASTS, fetchPodcasts)
}

// podcasts summary
function* _fetchPodcastById({ payload: id }: PayloadAction<string>) {
  try {
    // const response = yield call(api.fetchPodcast, id)
    // console.log(response)
    // yield put(getPodcastByIdSuccess());
  } catch (error) {
    const err = Array.isArray(error) ? error : [String(error)]
    yield put(setPodcastByIdError(err))
  }
}

export function* watchFetchPodcastById() {
  yield takeLatest(FQN_GET_PODCAST_BY_ID, fetchPodcastById)
}
