'use client'

import * as st from './index.css'
import { cx } from '~/styled-system/css'

export type Props = React.PropsWithChildren<{ className?: string }>

export default function Badge({ className, children }: Props) {
  return (
    <span className={cx(st.container, className)}>
      {children}
    </span>
  )
}
