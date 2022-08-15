import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthorizedLayout } from '../../components/AuthorizedLayout'
import { useAuth } from '../../hooks/useAuth'

export const AuthorizedContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to='/login' />
  }

  return <AuthorizedLayout>{children}</AuthorizedLayout>
}
