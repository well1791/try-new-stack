import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getInitialState } from '~/redux/utils'
import { NAMESPACE, FETCH_PODCASTS, FETCH_PODCAST_BY_ID } from './types'
import type {
  PodcastsState,
  PodcastsSummaryData,
  PodcastById,
} from './types'

const initialState: PodcastsState = {
  byId: getInitialState({}),
  list: getInitialState(undefined),
}

export const podcastsSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // podcasts summary
    [FETCH_PODCASTS]: (state: PodcastsState) => {
      state.list.isLoading = true
      state.list.errors = []
    },
    setPodcastsSuccess: (
      state: PodcastsState,
      { payload: podcasts }: PayloadAction<PodcastsSummaryData>,
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
    [FETCH_PODCAST_BY_ID]: (
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

export const {
  fetchPodcasts,
  setPodcastsSuccess,
  setPodcastsError,
  fetchPodcastById,
  setPodcastByIdSuccess,
  setPodcastByIdError,
} =  podcastsSlice.actions

export default podcastsSlice.reducer
