import type { DataState } from '~/types/redux'

export const getInitialState = <T>(data: T): DataState<T> => ({
  data,
  isLoading: false,
  errors: [],
})
