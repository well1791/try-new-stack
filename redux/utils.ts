import type { DataState } from '~/redux/types'

// for cache purposes
export const SECONDS = 1000
export const MINUTES = 60 * SECONDS
export const HOURS = 60 * MINUTES

export const getInitialState = <T>(data: T): DataState<T> => ({
  data,
  isLoading: false,
  errors: [],
})
