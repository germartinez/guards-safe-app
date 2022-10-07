import { Title } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e3e3;
  z-index: 10;
  background-color: white;
  height: 70px;
  padding: 0 40px;
  box-sizing: border-box;
`

const StyledTitle = styled(Title)`
  font-size: 20px;
  margin: 0 10px 0 0;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledTitle size="xl">Transaction Guards</StyledTitle>
    </HeaderWrapper>
  )
}

export default Header
