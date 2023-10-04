import { css } from '~/styled-system/css'
import { divider as ssDivider } from '~/styled-system/patterns'

export const container = css({
  pt: 10,
  pb: 3,
})

export const divider = ssDivider({
  orientation: 'horizontal',
  mt: '4',
  color: 'lightgray',
  thickness: '1',
})
