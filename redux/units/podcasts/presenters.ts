import type { PodcastSummary } from '~/redux/units/podcasts/types'
import type {
  PodcastsEntryResponse,
  PodcastResponse,
  PodcastResultEpisodeResponse,
  PodcastResultResponse,
} from '~/redux/api'

export const fromPodcastsEntryToPodcastSummary = (
  d: PodcastsEntryResponse
): PodcastSummary => {
  const imgs = d['im:image']
  const lastImg = imgs[imgs.length -1]
  return {
    id: d.id.attributes['im:id'],
    title: d.title.label,
    author: d['im:artist'].label,
    description: d.summary.label,
    img: {
      src: lastImg?.label,
      alt: 'podcast image',
    },
  }
}

const isEpisode = (
  ep: PodcastResultResponse
): ep is PodcastResultEpisodeResponse => ep.wrapperType === 'podcastEpisode'

const formatTime = (time: number): string => {
  const date = new Date(time);
  return `${date.getMinutes()}:${date.getSeconds()}`
}

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return [date.getDate(), date.getMonth(), date.getFullYear()].join('/')
}

export const fromPodcastResponseToPodcastSummary = (
  p: PodcastSummary,
  d: PodcastResponse,
): PodcastSummary => {
  return {
    ...p,
    episodes: d.results.filter(isEpisode).map((ep) => ({
      id: `${ep.trackId}`,
      title: ep.trackName,
      date: formatDate(ep.releaseDate),
      duration: ep.trackTimeMillis ? formatTime(ep.trackTimeMillis) : 'unknown',
      description: ep.description,
    })),
  }
}
