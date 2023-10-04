import PodcastGrid from '~/components/organism/PodcastGrid'

export default function LandingPage() {
  const podcastData = {
    img: {
      src: 'https://i.imgur.com/eyfhhqN_d.webp?maxwidth=760&fidelity=grand',
      alt: 'asd',
    },
    title: 'all songs considered',
    author: 'NPR',
  }
  const podcasts = Array.from({ length: 100 }).map((_, i) => ({
    id: `id-${i}`,
    ...podcastData
  }))

  return (
    <main>
      <PodcastGrid data={{ podcasts }} />
    </main>
  )
}
