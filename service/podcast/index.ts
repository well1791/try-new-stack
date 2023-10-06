import { create } from 'apisauce'
import type { ApiResponse } from 'apisauce'

import * as t from './types'

// `https://api.allorigins.win/get?url=${encodeURIComponent('')}`
const _api = create({ baseURL: 'https://itunes.apple.com' })

const api = {
  fetchPodcasts: () => _api.get<t.PodcastsResponse>(
    '/us/rss/toppodcasts/limit=100/genre=1310/json',
  ),
  fetchPodcast: (id: string) => _api.get<t.PodcastResponse>(
    `/lookup`,
    {
      id,
      media: 'podcast',
      entity: 'podcastEpisode',
      limit: 20,
    },
  ),
}

export type ApiPodcastsResponse = ApiResponse<t.PodcastsResponse>
export type ApiPodcastResponse = ApiResponse<t.PodcastResponse>

export * from './types'

export default api
