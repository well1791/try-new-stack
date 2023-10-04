import { create } from 'apisauce'

import * as t from '~/app/t/podcastApi'

// `https://api.allorigins.win/get?url=${encodeURIComponent('')}`
const _api = create({ baseURL: 'https://itunes.apple.com' })

const api = {
  getPodcasts: () => _api
    .get<t.PodcastsResponse>('/us/rss/toppodcasts/limit=100/genre=1310/json'),
  getPodcast: (id: string) => _api.get<t.PodcastResponse>(`/lookup`, {
    id,
    media: 'podcast',
    entity: 'podcastEpisode',
    limit: 20,
  })
}

export default api
