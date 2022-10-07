import { Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 120px 48px 48px;
  margin: 0 auto;
`

const HomePage = () => {
  return (
    <Wrapper>
      <Title size="md">HomePage</Title>
    </Wrapper>
  )
}

export default HomePage
