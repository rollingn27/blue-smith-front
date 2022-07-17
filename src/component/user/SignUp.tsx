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
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUp } from '../../api/user/signUp';

import Copyright from '../home/Copyright';
import Header from '../home/Header';

const theme = createTheme();

export default function SignUp() {
  const navi = useNavigate();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const mutation = useMutation(signUp, {
    onSuccess: (res) => {
      toast.info('Congratulations your sign up', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
      });
      navi('/');
    },
    onError: (err: AxiosError) => {
      toast.error('something wrong', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
      });
    },
    onSettled: () => {},
  });

  const onChangeNickname = (e: { target: { value: React.SetStateAction<string> } }) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const onChangePasswordConfirm = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      toast.error('password and passwordConfirm are not equal', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
      });
      return;
    }

    mutation.mutate({ email, nickname, password, passwordConfirm });
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
                    onChange={onChangeNickname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onChangeEmail}
                  />
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
                    onChange={onChangePassword}
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
                    onChange={onChangePasswordConfirm}
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
