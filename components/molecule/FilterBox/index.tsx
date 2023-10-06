'use client'

import * as st from './index.css'
import Input from '~/components/atom/InputText'
import Badge from '~/components/atom/Badge'
import { cx } from '~/styled-system/css'
import type { Div, Input as InputEl } from '~/types/dom'

export type Props = Omit<Div, 'children' | 'onChange'>
  & Required<{
    countItems: number
    placeholder: string
    name: string
    onChange: InputEl['onChange']
  }>
  & Partial<{
    isAutoFocused: boolean
    isDisabled: boolean
  }>

export default function FilterBox({
  name,
  className,
  countItems,
  placeholder,
  isAutoFocused = false,
  isDisabled = false,
  onChange,
  ...p
}: Props) {
  return (
    <div {...p} className={cx(st.container, className)}>
      <Badge>{countItems}</Badge>
      <Input
        name={name}
        autoFocus={isAutoFocused}
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
