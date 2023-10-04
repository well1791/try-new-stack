'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Podcast() {
  const pathname = usePathname()
  const gotoEpisode = (id: string) => `${pathname}/episode/${id}`

  return (
    <div>
      this is the podcast! :D
      <Link href={gotoEpisode('not-yet')}>
        go to: {gotoEpisode('not-net')}
      </Link>
    </div>
  )
}
