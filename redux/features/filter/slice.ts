import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getInitialState } from '~/redux/utils'
import { FILTER, CHANGE_TEXT, GET_RESULT } from './types'
import type { FilterState, FilterResultData } from './types'

const initialState: FilterState = {
  text: '',
  result: getInitialState({}),
}

export const filterSlice = createSlice({
  name: FILTER,
  initialState,
  reducers: {
    [CHANGE_TEXT]: (
      state: FilterState,
      { payload: text }: PayloadAction<string>,
    ) => {},
    storeFilterText: (
      state: FilterState,
      { payload: text }: PayloadAction<string>,
    ) => {
      state.text = text
    },

    // filtered result
    [GET_RESULT]: (
      state: FilterState,
      // { payload: text }: PayloadAction<string>,
    ) => {
      state.result.isLoading = true
      state.result.errors = []
    },
    getFilterResultSuccess: (
      state: FilterState,
      { payload: result }: PayloadAction<FilterResultData>,
    ) => {
      state.result.isLoading = false
      state.result.data = result
    },
    getFilterResultError: (
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
  storeFilterText,
  getFilterResult,
  getFilterResultSuccess,
  getFilterResultError,
} = filterSlice.actions

export default filterSlice.reducer
