import { FC } from 'react'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Typography,
} from '@mui/material'
import { TNavItems } from '../Header'

const DRAWER_WITH = 240

type TProps = {
  handleDrawerToggle: () => void
  mobileOpen: boolean
  navItems: TNavItems[]
}

export const HeaderDrawer: FC<TProps> = ({
  handleDrawerToggle,
  mobileOpen,
  navItems,
}) => {
  return (
    <Drawer
      anchor='left'
      variant='temporary'
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: DRAWER_WITH,
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant='h6' sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map(({ id, label, route }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
