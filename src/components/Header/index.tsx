import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState, useCallback } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderDrawer } from '../HeaderDrawer'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export type TNavItems = {
  id: number
  label: string
  route: string
}

const navItems: TNavItems[] = [
  {
    id: 1,
    label: 'Home',
    route: '/',
  },

  {
    id: 2,
    label: 'Contacts',
    route: '/contacts',
  },
]

export const Header = () => {
  const { isAuth, handleLogout } = useAuth()

  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev)
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Profile app
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ id, label, route }) => (
              <Button
                component={Link}
                to={route}
                key={id}
                sx={{ color: '#fff' }}
              >
                {label}
              </Button>
            ))}
            {isAuth ? (
              <Button sx={{ color: '#fff' }} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button component={Link} to='/login' sx={{ color: '#fff' }}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <HeaderDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          navItems={navItems}
        />
      </Box>
    </Box>
  )
}
