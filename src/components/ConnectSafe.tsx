import { Link, Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 120px 48px 48px;
`

const ConnectSafePage = () => {
  return (
    <Wrapper>
      <Link href="https://gnosis-safe.io/app/welcome">
        <Title size="md">Open this Safe App in the Safe UI</Title>
      </Link>
    </Wrapper>
  )
}

export default ConnectSafePage
