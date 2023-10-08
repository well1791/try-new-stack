export type PodcastsEntryImageResponse = {
  label: string
  attributes: { height: string }
}

export type PodcastsEntryResponse = {
  'im:name': { label: string }
  'im:image': Array<PodcastsEntryImageResponse>
  summary: { label: string }
  'im:price': {
    label: string
    attributes: {
      amount: string
      currency: string
    }
  }
  'im:contentType': {
    attributes: {
      term: string
      label: string
    }
  }
  rights: { label: string }
  title: { label: string }
  link: {
    attributes: {
      rel: string
      type: string
      href: string
    }
  }
  id: {
    label: string
    attributes: { 'im:id': string }
  }
  'im:artist': {
    label: string
    attributes: { href: string }
  }
  category: {
    attributes: {
      'im:id': string
      term: string
      scheme: string
      label: string
    }
  }
  'im:releaseDate': {
    label: string
    attributes: { label: string }
  }
}

export type PodcastsResponse = {
  feed: {
    author: {
      name: {}
      uri: {}
    }
    entry: Array<PodcastsEntryResponse>
    updated: { label: string }
    rights: { label: string }
    title: { label: string }
    icon: { label: string }
    link: Array<unknown>
    id: { label: string }
  }
}

export type PodcastResultEpisodeResponse = {
  artistIds: Array<unknown>
  artworkUrl60: string
  artworkUrl160: string
  artworkUrl600: string
  closedCaptioning: string
  collectionId: number
  collectionName: string
  collectionViewUrl: string
  contentAdvisoryRating: string
  country: string
  description: string
  episodeFileExtension: string
  episodeContentType: string
  episodeGuid: string
  episodeUrl: string
  feedUrl: string
  genres: Array<{ name: string; id: string }>
  kind: 'podcast-episode'
  previewUrl: string
  releaseDate: string
  shortDescription: string
  trackId: number
  trackName: string
  trackTimeMillis: number
  trackViewUrl: string
  wrapperType: 'podcastEpisode'
}

export type PodcastResultTrackResponse = {
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  artworkUrl600: string
  artistId: number
  artistName: string
  artistViewUrl: string
  collectionCensoredName: string
  collectionExplicitness: string
  collectionHdPrice: number
  collectionId: number
  collectionName: string
  collectionPrice: number
  collectionViewUrl: string
  country: string
  currency: string
  kind: string
  feedUrl: string
  genreIds: Array<string>
  genres: Array<string>
  primaryGenreName: string
  releaseDate: string
  trackCensoredName: string
  trackId: number
  trackName: string
  trackCount: number
  trackExplicitness: string
  trackPrice: number
  trackTimeMillis: number
  trackViewUrl: string
  wrapperType: 'track'
}

export type PodcastResultResponse =
  | PodcastResultEpisodeResponse
  | PodcastResultTrackResponse

  export type PodcastResponse = {
  resultCount: number
  results: Array<PodcastResultResponse>
}
