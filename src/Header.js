import React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Chance from 'chance';
import { saveFormSubmission, fetchLikedFormSubmissions } from './service/mockServer';

export default function Header() {
  const chance = new Chance();
  function createFormSubmission() {
    let formSubmission = {
      id: chance.guid(),
      data: {
        email: chance.email(),
        firstName: chance.first(),
        lastName: chance.last(),
        liked: true,
      },
    };
    return formSubmission;
  }
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{marginRight: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => saveFormSubmission(createFormSubmission())}
          >
            {console.log(JSON.parse(localStorage.getItem('formSubmissions')))}
            {console.log(fetchLikedFormSubmissions())}
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
