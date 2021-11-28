import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { fetchLikedFormSubmissions } from './service/mockServer';

export default function Content() {

  // Custom hook taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(callback, delay) {
    const savedCallback = React.useRef();

    // Remember the latest function.
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const [likedforms, setForms] = React.useState([]);

  useInterval(() => {
    setForms(JSON.parse(localStorage.getItem('formSubmissions'))||[]);
  }, 200);

  const handleClick = () => {
    setForms([]);
    localStorage.clear();
  };

  return (

    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={handleClick}
      >Clear All Forms
      </Button>
      {likedforms.map(likedforms => 
      <ol key = { likedforms.id }>
        <p className = "name">
          {likedforms.data['firstName']+" "}
          {likedforms.data['lastName']}
        </p>
        <p>{likedforms.data['email']}</p>
        <hr></hr>
      </ol>
      )}
    </Box>
  );
}
