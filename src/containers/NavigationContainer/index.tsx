import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthorizedContainer } from '../AuthorizedContainer'
import { UnauthorizedContainer } from '../UnauthorizedContainer'
import { ContactsScreen } from '../../screens/ContactsScreen'
import { HomeScreen } from '../../screens/HomeScreen'
import { LoginScreen } from '../../screens/LoginScreen'

export const NavigationContainer: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthorizedContainer />}>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/contacts' element={<ContactsScreen />} />
      </Route>
      <Route path='/' element={<UnauthorizedContainer />}>
        <Route path='/login' element={<LoginScreen />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
