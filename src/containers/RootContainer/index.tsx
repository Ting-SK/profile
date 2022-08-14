import { CssBaseline } from '@mui/material'
import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavigationContainer } from '../NavigationContainer'

export const RootContainer: FC = () => {
  return (
    <Router>
      <CssBaseline />
      <NavigationContainer />
    </Router>
  )
}
