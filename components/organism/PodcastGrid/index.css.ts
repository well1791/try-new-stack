import { css } from '~/styled-system/css'
import { grid } from '~/styled-system/patterns'


export const container = css({})

export const filterBox = css({
  justifyContent: 'flex-end',
  mb: 5,
})

export const cards = css(grid.raw({
  columns: 4,
  rowGap: '8rem',
  columnGap: 5,
}))
