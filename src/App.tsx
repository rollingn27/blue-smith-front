import Home from './component/home/Home';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from './component/home/Router';
import Test from './component/Test';
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Test />
      <ReactQueryDevtools initialIsOpen={false} />      
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
