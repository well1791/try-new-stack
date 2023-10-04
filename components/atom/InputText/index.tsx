import * as st from './index.css'
import { cx } from '~/styled-system/css'
import type { Input } from '~/types/dom'

export type Props = Input

export default function InputText({ className, ...p }: Props) {
  return (
    <input {...p} className={cx(st.container, className)} />
  )
}
