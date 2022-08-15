import { Stack, Typography } from '@mui/material'
import { useAuth } from '../../hooks/useAuth'
import { LogoRotate } from '../LogoRotate'

export const HomeComponent = () => {
  const { isAuth } = useAuth()
  return (
    <Stack
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='10px'
      height='calc(100vh - 72px)'
      bgcolor='#fafafa'
    >
      <Typography variant='h3' color='gray'>
        Hello, {isAuth ? 'admin' : 'stranger'}!
      </Typography>
      <LogoRotate />
    </Stack>
  )
}
