import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';

export default function Content() {
  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        TODO: List of liked submissions here (delete this line)
      </Typography>
      {console.log(JSON.parse(localStorage.getItem('formSubmissions')))}
      <Snackbar
        open={true}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        // action={action}
      />
    </Box>
  );
}
