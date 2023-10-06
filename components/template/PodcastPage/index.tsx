export default function PodcastPage() {
  const podcastData = {
  }
  const episodeData = {
  }
  const episodes = Array.from({ length: 66 }).map((_, i) => ({
    id: `id-${i}`,
    ...episodeData
  }))

  return (
    <>
      Podcast Details
    </>
  )
}
