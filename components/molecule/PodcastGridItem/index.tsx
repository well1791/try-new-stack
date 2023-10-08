'use client'

import Link from 'next/link'
// import Image from 'next/image'

import * as st from './index.css'
import route from '~/router'
import { css, cx } from '~/styled-system/css'

export type Data = {
  id: string
  title: string
  author: string
  img: {
    src: string
    alt: string
  }
}

export type Props = {
  className?: string
  imgHeight?: number
  data: Data
}

export default function PodcastGridItem({
  className,
  imgHeight = 150,
  data: d
}: Props) {
  const podcastDetailsUrl = route.podcast.makeUrl({ podcastId: d.id })
  const rootClass = cx(st.container, css({ '--height': imgHeight }), className)

  // TODO: ADD IMAGE
  return (
    <article className={rootClass}>
      <Link href={podcastDetailsUrl} className={st.content}>
        {/* <img
          className={st.img}
          src={d.img.src}
          width={imgHeight}
          height={imgHeight}
          alt={d.img.alt}
        /> */}
        <p className={st.title}>{d.title}</p>
        <p className={st.author}>Author: {d.author}</p>
      </Link>
    </article>
  )
}
