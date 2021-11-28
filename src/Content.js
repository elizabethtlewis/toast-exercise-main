import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Content() {

  let data = (JSON.parse(localStorage.getItem('formSubmissions')));

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
{/*
      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
      </Typography> */}
      {console.log(JSON.parse(localStorage.getItem('formSubmissions')))}
      {data.map(data => <p key = {data.id}>{data.data['email']}</p>)}
    </Box>
  );
}
