import { Title } from '@gnosis.pm/safe-react-components'
import TransactionGuard from 'src/components/TransactionGuard'
import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 120px 48px 48px;
  margin: 0 auto;
`

const HomePage = () => {
  return (
    <Wrapper>
      <Title size="xs">Enabled transaction guards</Title>
      <TransactionGuard enabled />
      <Title size="xs">Transaction guards</Title>
      <TransactionGuard />
    </Wrapper>
  )
}

export default HomePage
