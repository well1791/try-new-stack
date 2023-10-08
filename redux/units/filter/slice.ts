import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getInitialState } from '~/redux/utils'
import { FILTER, CHANGE_TEXT, GET_RESULT } from './types'
import type { FilterState } from './types'

const initialState: FilterState = {
  text: '',
  result: getInitialState([]),
}

const slice = createSlice({
  name: FILTER,
  initialState,
  reducers: {
    [CHANGE_TEXT]: (
      state: FilterState,
      { payload: text }: PayloadAction<string>,
    ) => {
      state.result.isLoading = true
    },
    setFilterText: (
      state: FilterState,
      { payload: text }: PayloadAction<string>,
    ) => {
      state.result.isLoading = false
      state.text = text
    },

    // filtered result
    [GET_RESULT]: (state: FilterState) => {
      state.result.isLoading = true
      state.result.errors = []
    },
    setFilterResultSuccess: (
      state: FilterState,
      { payload: result }: PayloadAction<FilterState['result']['data']>,
    ) => {
      state.result.isLoading = false
      state.result.data = result
    },
    setFilterResultError: (
      state: FilterState,
      { payload: error }: PayloadAction<Array<string>>,
    ) => {
      state.result.isLoading = false
      state.result.errors = error
    },
  },
})

export const {
  changeFilterText,
  setFilterText,
  getFilterResult,
  setFilterResultSuccess,
  setFilterResultError,
} = slice.actions

export default slice.reducer
