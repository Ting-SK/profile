import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ContactsScreen } from '../../screens/ContactsScreen'
import { HomeScreen } from '../../screens/HomeScreen'
import { LoginScreen } from '../../screens/LoginScreen'

export const NavigationContainer: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/contacts' element={<ContactsScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
