// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <head>
        <title>
           Contact App
        </title>
      </head>
      
      <Typography variant='title'>
        Call a Friend
      </Typography>
      <div>
      <Typography variant='subtitle'>
        Your friendly contact app
        </Typography>
      </div>
      <hr></hr>
    </>
  );
};

export default Header;
