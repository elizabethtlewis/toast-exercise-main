import React from 'react';
import ReactPolling from "react-polling";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchLikedFormSubmissions } from './service/mockServer';

export default function Content() {

  let data = (JSON.parse(localStorage.getItem('formSubmissions')) || []);

  // TODO 
  // let data = (fetchLikedFormSubmissions())
  // add polling
  // error handling

  return (

    <Box sx={{marginTop: 3}}>

      {/* <Typography variant="h4">Liked Form Submissions</Typography>
      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
      </Typography>  */}

      {data.map(data => <p key = {data.id}>{data.data['email']}</p>)}
    </Box>

  );
}
