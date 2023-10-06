import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getInitialState } from '~/redux/utils'
import { NAMESPACE, GET_PODCASTS, GET_PODCAST_BY_ID } from './types'
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
    [GET_PODCASTS]: (state: PodcastsState) => {
      state.list.isLoading = true
      state.list.errors = []
    },
    getPodcastsSuccess: (
      state: PodcastsState,
      { payload: podcasts }: PayloadAction<PodcastsSummaryData>,
    ) => {
      state.list.isLoading = false
      state.list.data = podcasts
    },
    getPodcastsError: (
      state: PodcastsState,
      { payload: error }: PayloadAction<Array<string>>,
    ) => {
      state.list.isLoading = false
      state.list.errors = error
    },

    // podcasts by id
    [GET_PODCAST_BY_ID]: (
      state: PodcastsState,
      { payload: id }: PayloadAction<string>,
    ) => {
      state.byId.isLoading = true
      state.byId.errors = []
    },
    getPodcastByIdSuccess: (
      state: PodcastsState,
      { payload: podcast }: PayloadAction<PodcastById>,
    ) => {
      state.byId.isLoading = false
      state.byId.data[podcast.id] = podcast
    },
    getPodcastByIdError: (
      state: PodcastsState,
      { payload: error }: PayloadAction<Array<string>>,
    ) => {
      state.byId.isLoading = false
      state.byId.errors = error
    },
  },
})

export const {
  getPodcasts,
  getPodcastsSuccess,
  getPodcastsError,
  getPodcastById,
  getPodcastByIdSuccess,
  getPodcastByIdError,
} =  podcastsSlice.actions

export default podcastsSlice.reducer
