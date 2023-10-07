import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ApiCtx, timer } from 'saga-query'
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
    fetchPodcasts: (state: PodcastsState) => {
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
    fetchPodcastById: (
      state: PodcastsState,
      { payload: id }: PayloadAction<string>,
    ) => {
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
    yield next()
    yield put(slice.actions.fetchPodcasts())
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
  function* () {
    try {
      // const response = yield call(api.fetchPodcast, id)
      // console.log(response)
      // yield put(getPodcastByIdSuccess());
    } catch (error) {
      // const err = Array.isArray(error) ? error : [String(error)]
      // yield put(setPodcastByIdError(err))
    }
  },
)

export const {
  setPodcastsSuccess,
  setPodcastsError,
  setPodcastByIdSuccess,
  setPodcastByIdError,
} =  slice.actions

export default slice.reducer
