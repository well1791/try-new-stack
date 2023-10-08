import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { timer, select } from 'saga-query'
import { put } from 'redux-saga/effects'

import api from '~/redux/api'
import defaultPodcasts from '~/data/podcasts'
import { getInitialState, HOURS } from '~/redux/utils'
import {
  fromPodcastsEntryToPodcastSummary,
  fromPodcastResponseToPodcastSummary,
} from './presenters'
import { setFilterResultSuccess } from '~/redux/units/filter/slice'
import { NAMESPACE, STOP_FETCH } from './types'
import type { PodcastsState, PodcastSummary, PodcastsMapData } from './types'
import type { PodcastsResponse, PodcastResponse } from '~/redux/api'

const ONE_DAY = 24 * HOURS

const initialState: PodcastsState = getInitialState(undefined)

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // podcasts summary
    startFetch: (state: PodcastsState) => {
      state.isLoading = true
      state.errors = []
    },
    [STOP_FETCH]: (state: PodcastsState) => {
      state.isLoading = false
      state.errors = []
    },
    setPodcastsSuccess: (
      state: PodcastsState,
      { payload: podcasts }: PayloadAction<PodcastsState['data']>,
    ) => {
      state.isLoading = false
      state.data = podcasts
    },
    setPodcastsError: (
      state: PodcastsState,
      { payload: error }: PayloadAction<Array<string>>,
    ) => {
      state.isLoading = false
      state.errors = error
    },
  },
})

export const fetchPodcasts = api.get(
  encodeURIComponent(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  ),
  { saga: timer(ONE_DAY) },
  function* (ctx, next) {
    ctx.cache = true
    yield put(startFetch())
    try {
      yield next()
      if (ctx.json.ok) {
        const data: PodcastsResponse = JSON.parse(ctx.json.data.contents)
        const podcasts: PodcastsMapData = data.feed.entry.reduce((z, x) => z.set(
          x.id.attributes['im:id'],
          fromPodcastsEntryToPodcastSummary(x),
        ), new Map())
        yield put(setPodcastsSuccess(podcasts))
        yield put(setFilterResultSuccess(Array.from(podcasts.values())))
      } else {
        yield put(setPodcastsError(['Something happened']))
      }
    } catch(err) {
      const data = defaultPodcasts
      const podcasts: PodcastsMapData = data.feed.entry.reduce((z, x) => z.set(
        x.id.attributes['im:id'],
        fromPodcastsEntryToPodcastSummary(x as any),
      ), new Map())
      yield put(setPodcastsSuccess(podcasts))
      yield put(setFilterResultSuccess(Array.from(podcasts.values())))
      yield put(setPodcastsError(['Something is wrong']))
    }
  },
)

const getPodcastByIdUrl = (id: string) => encodeURIComponent(
  'https://itunes.apple.com/lookup' +
  `?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
)
export const fetchEpisodesByPodcastId = api.get<{ id: string }>(
  '/fetch-episodes-by-podcast-id',
  { saga: timer(ONE_DAY) },
  function* (ctx, next) {
    const id = ctx.payload.id
    ctx.cache = true
    ctx.undoable = true
    ctx.request = ctx.req({ url: getPodcastByIdUrl(id) })
    yield put(startFetch())
    const podcasts: PodcastsState = yield select((s) => s.podcasts)
    const podcastsMap = new Map(podcasts.data)
    const podcast = (podcastsMap.get(id) ?? { id }) as PodcastSummary
    try {
      yield next()
      if (ctx.json.ok) {
        const data: PodcastResponse = JSON.parse(ctx.json.data.contents)
        podcastsMap.set(
          id,
          fromPodcastResponseToPodcastSummary(podcast, data),
        )
        yield put(setPodcastsSuccess(podcastsMap))
      } else {
        const msgError =
          `There was a network error while fetching podcast "${id}"`
        yield put(setPodcastsError([msgError]))
      }
    } catch (err) {
      const msgError =
        `There was a server error while fetching podcast "${id}"`
      yield put(setPodcastsError([msgError]))
    }
  },
)

export const {
  startFetch,
  stopFetch,
  setPodcastsSuccess,
  setPodcastsError,
} =  slice.actions

export default slice.reducer
