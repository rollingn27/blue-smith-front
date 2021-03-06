import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import Home from './Home';
import React from 'react';
import AllList from '../board/AllList';
import Write from '../board/Write';
const NotFound = () => {
  return <Link to="..">돌아가!!</Link>;
};
const AboutPage = () => {
  return <>about</>;
};

const Router = () => {
  return (
  <>
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/board/allList" element={<AllList />} />
          <Route path="/board/write" element={<Write />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default Router
