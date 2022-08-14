import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { AuthorizedLayout } from '../../components/AuthorizedLayout'

export const AuthorizedContainer = () => {
  //   const { authenticated } = useAuth();

  //   if (!authenticated) {
  //     return <Navigate to="/auth" />
  //   }

  return (
    <AuthorizedLayout>
      <Outlet />
    </AuthorizedLayout>
  )
}
