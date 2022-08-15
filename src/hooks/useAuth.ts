import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEqual } from 'lodash'

const authAccess = [{ password: 'admin', nickName: 'admin' }]

export const useAuth = () => {
  const [errors, setErrors] = useState<string>('')

  const navigate = useNavigate()

  const isAuth = localStorage.getItem('profileApp')

  const handleLogin = useCallback(
    (values: { nickName?: string; password?: string }) => {
      setErrors('')
      const isAccess = authAccess.filter((obj) => isEqual(obj, values))
      if (isAccess.length > 0) {
        localStorage.setItem('profileApp', '1')
        navigate('/')
      } else {
        setErrors('Wrong nickName or password')
      }
    },
    [navigate]
  )

  const handleLogout = useCallback(() => {
    navigate('/')
    localStorage.clear()
  }, [navigate])

  return { isAuth, handleLogin, handleLogout, errors }
}
