import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import rootReducer from './rootReducer'
import rootSagas from './rootSagas'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useState: TypedUseSelectorHook<RootState> = useSelector

export default store
