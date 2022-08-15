import { FC, ReactNode } from 'react'
import { Box, CssBaseline, Stack } from '@mui/material'
import { Header } from '../Header'

export const AuthorizedLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack
      flexDirection='column'
      alignItems='center'
      width='100%'
      height='100vh'
    >
      <CssBaseline />
      <Header />
      <Box width='100%' pt={8}>
        {children}
      </Box>
    </Stack>
  )
}
