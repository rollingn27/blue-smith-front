import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';
import Header from './Header';
import React from 'react';
import { getTemp } from '../../api/home/getTemp';

const theme = createTheme();
type homeProps = {};

const Home = ({}: homeProps) => {
  
  return (
    <>      
      <ThemeProvider theme={theme}>
        <Header />
        <Copyright sx={{ mt: 5 }} />
      </ThemeProvider>
    </>
  );
};

export default Home;
