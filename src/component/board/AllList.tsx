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
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
  } from '@mui/x-data-grid';
  import Pagination from '@mui/material/Pagination';

const theme = createTheme();

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }


export default function board() {
    
    const [ boardList, setBoardList ] = useState('');

    function callback(boardList: any) {
        setBoardList(boardList);
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
            <div>Board Testing</div>
            <div> 
                {/* <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        pagination
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        components={{
                            Pagination: CustomPagination,
                        }}
                        {...boardList}
                    />
                </Box>  */}
            </div>
            <Copyright sx={{ mt: 5 }} />
          </ThemeProvider>
        </>
    );
}