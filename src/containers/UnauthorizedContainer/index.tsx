import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const UnauthorizedContainer = () => {
  // const { authenticated } = useAuth();

  // if (authenticated) {
  //   return <Navigate to="/" />
  // }

  return <Outlet />
}
