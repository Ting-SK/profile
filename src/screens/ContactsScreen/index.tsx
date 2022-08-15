import {
  Stack,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material'
import { AuthorizedContainer } from '../../containers/AuthorizedContainer'

export const ContactsScreen = () => (
  <AuthorizedContainer>
    <Stack
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='10px'
      height='calc(100vh - 64px)'
      bgcolor='#fafafa'
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '10px',
          minWidth: '275px',
          maxWidth: '350px',
          height: '200px',
          bgcolor: '#00FFFF',
          borderRadius: '12px',
          boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        }}
      >
        <CardContent>
          <Typography variant='h6'>Hello</Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <Typography variant='body1'>Edit</Typography>
          </Button>
        </CardActions>
      </Card>
    </Stack>
  </AuthorizedContainer>
)
