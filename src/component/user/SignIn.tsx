import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { signIn } from '../../api/user/signIn';
import Copyright from '../home/Copyright';
import Header from '../home/Header';

const theme = createTheme();

export default function SignIn() {
  const qc = useQueryClient();
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState();
  const mutation = useMutation(signIn, {
    onSuccess: (res) => {
      toast.success('Login Success', {
        // type: 'success',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
      });
      console.log('ㅇㅇㅇ');
      qc.setQueryData('user', res.user);
    },
    onError: (err: AxiosError) => {
      // setLoginError(err.response?.data?.message)
      toast.success('Login Success', {
        // type: 'success',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
      });
    },
    onSettled: () => {
      toast.success('Login Success', {
        // type: 'success',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
      });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    toast.success('Login Success', {
      // type: 'success',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
    });
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get('email') as string);
    setPassword(data.get('password') as string);
    mutation.mutate({ email, password });
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
