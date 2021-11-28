import React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Chance from 'chance';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { saveFormSubmission, fetchLikedFormSubmissions } from './service/mockServer';


export function createFormSubmission() {
  const chance = new Chance();
  let formSubmission = {
    id: chance.guid(),
    data: {
      email: chance.email(),
      firstName: chance.first(),
      lastName: chance.last(),
      liked: false,
    },
  };
  return formSubmission;
}

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    saveFormSubmission(createFormSubmission());
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // TODO
  // updateLike changes the 'liked' param in the current formSubmission to true
  function updateLike() {
    handleClose();
  }

  // This function retrieves the users first name, last name, and email from local storage
  function getContent() {

    // console.log(localStorage.getItem('formSubmissions'))
    // console.log(JSON.parse(localStorage.getItem('formSubmissions')));

    let data = JSON.parse(localStorage.getItem('formSubmissions'));
    data = data[data.length-1];

    let result = "";
    result = result.concat(data.data['firstName'], " ", data.data['lastName'], " ", data.data['email']);

    return result;
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => updateLike()}>
        LIKE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
            onClick={handleClick}
          >
            New Submission
          </Button>
          <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={getContent()}
              action={action}
            />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
