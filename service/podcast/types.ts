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

export type PodcastResultResponse = {
  wrapperType: string
  kind: string
  artistId: number
  collectionId: number
  trackId: number
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  collectionHdPrice: number
  releaseDate: string
  collectionExplicitness: string
  trackExplicitness: string
  trackCount: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  artworkUrl600: string
  genreIds: Array<string>
  genres: Array<string>
}

export type PodcastResponse = {
  resultCount: number
  results: Array<PodcastResultResponse>
}
