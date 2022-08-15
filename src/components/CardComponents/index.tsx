import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'

export const CardComponents = () => {
  const contacts: {
    id: number
    label: string
    info: string
  }[] = useAppSelector((state) => state.contacts.data)
  return (
    <>
      {contacts.map(({ id, label, info }) => (
        <Card
          key={id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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
            <Typography variant='h6'>{label}</Typography>
          </CardContent>
          <CardContent>
            <Typography variant='body1'>{info}</Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>
              <Typography variant='body1'>Edit</Typography>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}
