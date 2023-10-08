import { css } from '~/styled-system/css'
import { flex } from '~/styled-system/patterns'
import { divider } from '~/styled-system/patterns'

export const container = css(flex.raw({
  align: 'center',
}), divider.raw({
  orientation: 'horizontal',
  marginBlockStart: 4,
  color: 'lightgray',
  thickness: '1',
}), {
  paddingBlockStart: 10,
  paddingBlockEnd: 3,
  _after: {
    opacity: 'var(--is-loading, 0)',
    content: '"⏳"',
    marginInlineStart: 'auto',
    paddingInlineEnd: 4,
  },
})
