import { css } from '~/styled-system/css'
import { divider as ssDivider } from '~/styled-system/patterns'

export const container = css({
  width: '100%',
  maxWidth: '25%',
  minWidth: 100,
  boxShadow: 'md',
  paddingBlock: 3,
  paddingInline: 2,

  '& p': {
    fontStyle: 'italic',
  },
})

export const divider = css({
  '--space': '1.25rem',
}, ssDivider.raw({
  color: 'lightgray',
  thickness: '0.5',
  paddingBlockStart: 'var(--space)',
  marginBlockEnd: 'var(--space)',
}))

export const img = css({
  width: 100,
  height: 100,
  marginInline: 'auto',
  bg: 'red',
})

export const title = css({
  display: 'inline-block',
  paddingInline: 3,

  '& h2': {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 'l',
  },
})

export const description = css({
  paddingInline: 1,

  '& h3': {
    fontWeight: 'medium',
  },
})
