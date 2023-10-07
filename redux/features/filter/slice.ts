import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getInitialState } from '~/redux/utils'
import { FILTER, CHANGE_TEXT, GET_RESULT } from './types'
import type { FilterState, FilterResultData } from './types'

const initialState: FilterState = {
  text: '',
  result: getInitialState(new Map()),
}

export const filterSlice = createSlice({
  name: FILTER,
  initialState,
  reducers: {
    [CHANGE_TEXT]: (
      state: FilterState,
      { payload: text }: PayloadAction<string>,
    ) => {},
    setFilterText: (
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
    setFilterResultSuccess: (
      state: FilterState,
      { payload: result }: PayloadAction<FilterResultData>,
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
} = filterSlice.actions

export default filterSlice.reducer
