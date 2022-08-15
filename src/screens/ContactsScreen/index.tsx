import { Box, Button } from '@mui/material'
import { CardComponents } from '../../components/CardComponents'
import { AuthorizedContainer } from '../../containers/AuthorizedContainer'

export const ContactsScreen = () => (
  <AuthorizedContainer>
    <Box>
      <Button>a</Button>
    </Box>
    <Box
      justifyContent='center'
      justifyItems='center'
      alignItems='center'
      p='16px 0'
      gap='20px'
      height='100%'
      bgcolor='#fafafa'
      sx={{ display: 'grid', gridTemplate: '1fr 1fr / 1fr 1fr 1fr' }}
    >
      <CardComponents />
    </Box>
  </AuthorizedContainer>
)
