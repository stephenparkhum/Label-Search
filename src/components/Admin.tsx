import { Typography, MenuItem, Box, TextField, Select, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { genresRef } from '../firebaseSetup';
import { Genres } from '../types/types';

const Admin = () => {
  const [genreChoice, setGenreChoice] = useState();
  const [genres, setGenres] = useState<Genres[]>([]);

  useEffect(() => {
    genresRef.on('value', (snapshot) => {
      let allGenres: Genres[] = [];
      snapshot.forEach((snap) => {
        allGenres.push(snap.val());
      });
      setGenres(allGenres);
    });
  }, []);

  const displayGenres = () => {
    return genres.map((genre) => {
      return <MenuItem value={genre.slug}>{genre.displayName}</MenuItem>;
    });
  };

  return (
    <div>
      <div id="admin-header">
        <Typography>Add Genre</Typography>
      </div>
      <div id="admin-body">
        <div id="admin-body--form">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField id="filled-basic" label="Label Name" variant="filled" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="filled-basic" label="Website" variant="filled" />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genreChoice}
              label="Genres">
              {displayGenres()}
            </Select>
          </Box>
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            mt: 2,
          }}>
          <Button variant="contained">Submit</Button>
        </Box>
      </div>
    </div>
  );
};

export default Admin;
