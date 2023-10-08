import { css } from '~/styled-system/css'
import { vstack } from '~/styled-system/patterns'


export const container = css(vstack.raw({
  gap: 8,
}), {
  minWidth: 200,
  width: '100%',
  maxWidth: '70%',
})

export const title = css({
  width: 'inherit',
  p: 4,
  boxShadow: 'md',
  fontSize: '2xl',
  fontWeight: 'bold',
})

export const table = css({
  width: 'inherit',
  display: 'block',
  p: 4,
  boxShadow: 'md',
  textAlign: 'left',

  '& thead': {
    fontWeight: 'bold',
  },
  '& tr': {
    borderBottom: '2px solid lightgray',
  },
  '& th': {
    p: 2,
  },
  '& td': {
    p: 2,
    width: '35%',
  },
  '& td:first-of-type': {
    width: '65%',
    '& a': {
      display: 'inline-block',
      width: '100%',
    },
  },
  '& td:nth-child(3)': {
    textAlign: 'center',
  },
  '& tbody tr:nth-child(odd)': {
    backgroundColor: 'lightBg',
  },
})
