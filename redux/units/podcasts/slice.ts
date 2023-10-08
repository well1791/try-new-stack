import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ApiCtx, timer, delay } from 'saga-query'
import { put } from 'redux-saga/effects'

import api from '~/redux/api'
import { getInitialState } from '~/redux/utils'
import { NAMESPACE } from './types'
import { HOURS } from '~/redux/utils'
import { fromPodcastsEntryToPodcastSummary } from './presenters'
import { setFilterResultSuccess } from '~/redux/units/filter/slice'
import type { PodcastsState, PodcastById } from './types'

const initialState: PodcastsState = {
  byId: getInitialState({}),
  list: getInitialState(undefined),
}

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // podcasts summary
    startPodcastsFetch: (state: PodcastsState) => {
      state.list.isLoading = true
      state.list.errors = []
    },
    setPodcastsSuccess: (
      state: PodcastsState,
      { payload: podcasts }: PayloadAction<PodcastsState['list']['data']>,
    ) => {
      state.list.isLoading = false
      state.list.data = podcasts
    },
    setPodcastsError: (
      state: PodcastsState,
      { payload: error }: PayloadAction<Array<string>>,
    ) => {
      state.list.isLoading = false
      state.list.errors = error
    },

    // podcasts by id
    startPodcastByIdFetch: (state: PodcastsState) => {
      state.byId.isLoading = true
      state.byId.errors = []
    },
    setPodcastByIdSuccess: (
      state: PodcastsState,
      { payload: podcast }: PayloadAction<PodcastById>,
    ) => {
      state.byId.isLoading = false
      state.byId.data[podcast.id] = podcast
    },
    setPodcastByIdError: (
      state: PodcastsState,
      { payload: error }: PayloadAction<Array<string>>,
    ) => {
      state.byId.isLoading = false
      state.byId.errors = error
    },
  },
})

const ONE_DAY = 24 * HOURS
export const fetchPodcasts = api.get(
  '/us/rss/toppodcasts/limit=100/genre=1310/json',
  { saga: timer(ONE_DAY) },
  function* (ctx: ApiCtx, next) {
    yield put(startPodcastsFetch())
    yield next()
    if (ctx.json.ok) {
      const { data } = ctx.json;
      const podcasts = data.feed.entry.map(fromPodcastsEntryToPodcastSummary)
      yield put(setPodcastsSuccess(podcasts))
      yield put(setFilterResultSuccess(podcasts))
    } else {
      yield put(setPodcastsError(['No data was found']))
    }
  },
)

export const fetchPodcastById = api.get(
  '/lookup?id=:id&media=podcast&entity=podcastEpisode&limit=20',
  { saga: timer(ONE_DAY) },
  function* (ctx: ApiCtx, next) {
    yield next()
    if (ctx.json.ok) {
      // yield put(startPodcastByIdFetch())
      // const response = yield call(api.fetchPodcast, id)
      // console.log(response)
      // yield put(setPodcastByIdSuccess(response));
    } else {
      yield put(setPodcastByIdError(['Error: ']))
    }
  },
)

export const {
  startPodcastsFetch,
  setPodcastsSuccess,
  setPodcastsError,
  startPodcastByIdFetch,
  setPodcastByIdSuccess,
  setPodcastByIdError,
} =  slice.actions

export default slice.reducer
