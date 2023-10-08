import {
  UndoCtx,
  createApi,
  requestMonitor,
  fetcher,
  undoer,
} from 'saga-query'

const api = createApi<UndoCtx>();

api.use(requestMonitor());
api.use(api.routes());
api.use(fetcher({ baseUrl: 'https://api.allorigins.win/get?url=' }));
api.use(undoer())

export * from './types'
export default api
