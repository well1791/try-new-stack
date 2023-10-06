import { css } from '~/styled-system/css'
import { vstack } from '~/styled-system/patterns'

export const container = css({
  display: 'inline-block',
  pos: 'relative',
  pt: 'calc(var(--height) * 1px)'
})

export const content = css(vstack.raw(), {
  boxShadow: 'sm',
  p: 3,
  textAlign: 'center',
})

// TODO: ADD STYLE
export const  img = css({
  clipPath: 'circle(50%)',
  pos: 'absolute',
  insetBlockEnd: 0,
  // insetBlockStart: '-50%',
})

export const title = css({
  fontWeight: 'medium',
  textTransform: 'uppercase',
})

export const author = css({
  color: 'gray',
})
