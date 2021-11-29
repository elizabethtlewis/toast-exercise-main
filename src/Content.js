import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Content.css'
// import { fetchLikedFormSubmissions } from './service/mockServer';

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
  }, 500);

  const handleClick = () => {
    setForms([]);
    localStorage.clear();
  };

  return (

    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      <div className = 'clear-button'>
      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={handleClick}
      >Clear All Forms
      </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Form ID </TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {likedforms.slice(0).reverse().map(likedforms =>
          <TableRow
            key={likedforms.id}
          >
            <TableCell>{likedforms.id}</TableCell>
            <TableCell align="right">{likedforms.data['firstName']}</TableCell>
            <TableCell align="right">{likedforms.data['lastName']}</TableCell>
            <TableCell align="right">{likedforms.data['email']}</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
