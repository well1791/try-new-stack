'use client'

import * as st from './index.css'
import { cx } from '~/styled-system/css'
import type { Input } from '~/types/dom'

export type Props = Omit<Input, 'type'>

export default function InputText({ className, ...p }: Props) {
  return (
    <input
      {...p}
      type="text"
      className={cx(st.container, className)}
    />
  )
}
