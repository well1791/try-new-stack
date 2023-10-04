import * as st from "./index.css"
import { cx } from '~/styled-system/css'
import type { Heading } from '~/types/dom'

export type Props = Heading & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const headings: Array<(p: Heading) => JSX.Element> = [
  ({ children, ...p }) => <h1 {...p}>{children}</h1>,
  ({ children, ...p }) => <h2 {...p}>{children}</h2>,
  ({ children, ...p }) => <h3 {...p}>{children}</h3>,
  ({ children, ...p }) => <h4 {...p}>{children}</h4>,
  ({ children, ...p }) => <h5 {...p}>{children}</h5>,
  ({ children, ...p }) => <h6 {...p}>{children}</h6>,
]

export default function Heading({ level = 1, className, ...p }: Props) {
  const Hn = headings[level - 1]
  return <Hn {...p} className={cx(st.h1, className)} />
}
