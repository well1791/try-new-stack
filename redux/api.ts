import {
  ApiCtx,
  createApi,
  requestMonitor,
  fetcher,
} from 'saga-query'

const api = createApi<ApiCtx>();

api.use(requestMonitor());
api.use(api.routes());
api.use(fetcher({
  baseUrl: 'https://itunes.apple.com',
  // baseUrl: 'https://api.allorigins.win/get?url=https://itunes.apple.com',
}));

export default api
