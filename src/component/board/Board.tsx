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
import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { signUp } from '../../api/user/signup';
import Copyright from '../home/Copyright';
import Header from '../home/Header';
import axios from 'axios';

const theme = createTheme();




export default function board() {
    
    const [ testStr, setTestStr ] = useState('');

    function callback(str: any) {
        setTestStr(str);
    }

    useEffect(
        () => {
            axios({
                url: '/board/allList',
                method: 'GET'
            }).then((res) => {
                callback(res.data);
            })
        }, []
    );

    return (
        <>      
          <ThemeProvider theme={theme}>
            <Header />
            <div> {testStr} </div>
            <Copyright sx={{ mt: 5 }} />
          </ThemeProvider>
        </>
    );
}