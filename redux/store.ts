// import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { prepareStore } from 'saga-query'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import rootReducer from './rootReducer'
import rootSagas from './rootSagas'
import api from './api'

// const sagaMiddleware = createSagaMiddleware()
const prepared = prepareStore({
  reducers: rootReducer,
  sagas: { api: api.saga() },
})
const store = configureStore({
  reducer: prepared.reducer,
  middleware: prepared.middleware,
  // middleware: [sagaMiddleware],
})
// sagaMiddleware.run(rootSagas)
prepared.run(rootSagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useState: TypedUseSelectorHook<RootState> = useSelector

export default store
