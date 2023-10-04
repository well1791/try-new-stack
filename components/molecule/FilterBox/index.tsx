import * as st from './index.css'
import Input from '~/components/atom/InputText'
import Badge from '~/components/atom/Badge'
import { cx } from '~/styled-system/css'
import type { Div } from '~/types/dom'

export type Props = Omit<Div, 'children'> & {
  countItems: number
}

export default function FilterBox({ countItems, className, ...p }: Props) {
  return (
    <div {...p} className={cx(st.container, className)}>
      <Badge>{countItems}</Badge>
      <Input autoFocus placeholder="Filter podcasts..." />
    </div>
  )
}
