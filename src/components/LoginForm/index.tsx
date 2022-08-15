import { useCallback } from 'react'
import { Form, Field } from 'react-final-form'
import { Box, Stack, Button, Typography } from '@mui/material'
import { useAuth } from '../../hooks/useAuth'

const inputs: {
  id: number
  name: string
  type: 'text' | 'password'
  placeholder?: string
}[] = [
  { id: 1, name: 'nickName', type: 'text', placeholder: 'NickName' },
  { id: 2, name: 'password', type: 'password', placeholder: 'Password' },
]

const required = (value: string | number) => (value ? undefined : 'Required')

export const LoginForm = () => {
  const { handleLogin, errors } = useAuth()

  const onSubmit = useCallback(
    (values: { nickName?: string; password?: string }) => {
      handleLogin(values)
    },
    [handleLogin]
  )

  return (
    <Stack
      width='300px'
      p={3}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        borderRadius: '12px',
        bgcolor: '#fafafa',
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
      }}
    >
      <Typography variant='h6' component='h6' mb={3}>
        Hello, please sign in
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ nickName: '', password: '' }}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Stack
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              gap='10px'
            >
              {inputs.map(({ id, name, type, placeholder }) => (
                <Box key={id}>
                  <Field name={name} validate={required}>
                    {({ input, meta }) => (
                      <Box>
                        <input
                          {...input}
                          type={type}
                          style={{
                            width: '100%',
                            height: '30px',
                            fontSize: '16px',
                          }}
                          placeholder={placeholder}
                        />
                        {meta.error && meta.touched && (
                          <Typography
                            color='red'
                            sx={{ padding: '0', margin: '0' }}
                          >
                            {meta.error}
                          </Typography>
                        )}
                      </Box>
                    )}
                  </Field>
                </Box>
              ))}
              {errors && (
                <Typography color='red' sx={{ padding: '0', margin: '0' }}>
                  {errors}
                </Typography>
              )}
              <Box mt={3}>
                <Button
                  type='submit'
                  variant='contained'
                  disabled={submitting || pristine}
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          </form>
        )}
      />
    </Stack>
  )
}
