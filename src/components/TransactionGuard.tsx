import { Button, Text, Title } from '@gnosis.pm/safe-react-components'
import { ReactElement } from 'react'
import styled from 'styled-components'

interface TransactionGuardProps {
  enabled?: boolean
}

const TransactionGuard = ({ enabled }: TransactionGuardProps): ReactElement => {
  return (
    <Card>
      <StyledTitle size="xs">DebugTransactionGuard</StyledTitle>
      <StyledText size="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </StyledText>
      {enabled ? (
        <ButtonContainer>
          <Button size="md" color="primary" type="submit">
            Disable guard
          </Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button size="md" color="primary" type="submit">
            Enable guard
          </Button>
        </ButtonContainer>
      )}
    </Card>
  )
}

export default TransactionGuard

const Card = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
`

const StyledTitle = styled(Title)`
  font-weight: bold;
  line-height: 22px;
  font-size: 16px;
`

const StyledText = styled(Text)`
  margin-top: 0px;
  line-height: 22px;
  font-size: 16px;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`
