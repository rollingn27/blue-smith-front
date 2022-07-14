import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { signUp } from '../../api/user/signUp';

import Copyright from '../home/Copyright';
import Header from '../home/Header';

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState('n28kek@hanmail.net');
  const [nickname, setNickname] = useState('롤링');
  const [password, setPassword] = useState('111');
  const [passwordConfirm, setPasswordConfirm] = useState('111');

  const mutation = useMutation(signUp, {
    onSuccess: (res) => {
      toast.success('Login Success', {
        // type: 'success',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
      });
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
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    setEmail(data.get("email") as string);
    mutation.mutate({ email, nickname, password, passwordConfirm });
    
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="NickName"
                    required
                    fullWidth
                    id="NickName"
                    label="Nick Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm password"
                    label="confirm Password"
                    type="password"
                    id="passwordConfirm"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
