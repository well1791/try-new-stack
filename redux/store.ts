import { configureStore } from '@reduxjs/toolkit'
import { prepareStore } from 'saga-query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import api from './api'

const prepared = prepareStore({
  reducers: rootReducer,
  sagas: {
    api: api.saga(),
    root: rootSaga,
  },
})
const store = configureStore({
  reducer: prepared.reducer,
  middleware: prepared.middleware,
})
prepared.run()

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store
