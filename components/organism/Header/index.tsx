import * as st from './index.css'
import Heading from '~/components/atom/Heading'

export type Props = {}

export default function Header({}: Props) {
  return (
    <header className={st.container}>
      <Heading>Podcaster</Heading>
      <div className={st.divider} />
    </header>
  )
}
