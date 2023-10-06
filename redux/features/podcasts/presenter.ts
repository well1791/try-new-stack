import type {
  PodcastSummary,
  PodcastById,
} from '~/redux/features/podcasts/types'
import type {
  PodcastsEntryResponse,
  PodcastResultResponse,
} from '~/service/podcast/types'

export const fromPodcastsEntryToPodcastSummary = (
  data: PodcastsEntryResponse
): PodcastSummary => {
  const imgs = data['im:image']
  const lastImg = imgs[imgs.length -1]
  return {
    id: data.id.attributes['im:id'],
    title: data.title.label,
    author: data['im:artist'].label,
    img: {
      src: lastImg?.label,
      alt: 'no alt yet',
    },
  }
}

export const fromPodcastsResultToPodcastById = (
  data: PodcastResultResponse
): PodcastById => {
  return { id: '' }
}