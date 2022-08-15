import { Stack } from '@mui/material'
import { LoginForm } from '../../components/LoginForm'
import { UnauthorizedContainer } from '../../containers/UnauthorizedContainer'

export const LoginScreen = () => {
  return (
    <UnauthorizedContainer>
      <Stack
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='calc(100vh - 64px)'
        bgcolor='#a8edea'
      >
        <LoginForm />
      </Stack>
    </UnauthorizedContainer>
  )
}
