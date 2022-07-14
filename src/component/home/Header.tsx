import HomeIcon from '@mui/icons-material/Home';
import { Button, Link, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import React from 'react';
import Moment from 'react-moment';

type HeaderProps = {};

const sections = [
  { title: 'Schedule', url: '#' }
];

const Header = ({}: HeaderProps) => {
  const now = new Date();

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', padding: '1.5rem 0.5rem' }}>
        <Link href="/">
          <HomeIcon fontSize="large" color="info" />
        </Link>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, paddingLeft: '20rem' }}
        >
          <Moment interval={1} format="HH : mm">
            {now}
          </Moment>
          <div style={{ fontSize: '1rem', alignItems: 'center' }}>
            <Moment format="YYYY-MM-DD" style={{ marginRight: '1rem' }}>
              {now}
            </Moment>
            (<Moment format="ddd">{now}</Moment>)
          </div>
        </Typography>
        <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
          <div>
            <Link href="/board/allList">
              <Button variant="outlined" size="small" sx={{ marginLeft: '1rem' }}>
                Board
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outlined" size="small" sx={{ marginLeft: '1rem' }}>
                Sign up
              </Button>
            </Link>
            <Link href="/signin">
              <Button variant="outlined" size="small" sx={{ marginLeft: '1rem' }}>
                Sign in
              </Button>
            </Link>
          </div>
        </Toolbar>
      </Toolbar>
    </>
  );
};

export default Header;
