import { Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { genresRef } from '../firebaseSetup';
import { Genres } from '../types/types';
import AdminAddLabel from './AdminAddLabel';

const Admin = () => {
  const [genreChoice, setGenreChoice] = useState<string>();
  const [newLabel, setNewLabel] = useState({});
  const [genres, setGenres] = useState<Genres[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    genresRef.on('value', (snapshot) => {
      let allGenres: Genres[] = [];
      snapshot.forEach((snap) => {
        allGenres.push(snap.val());
      });
      setGenres(allGenres);
    });
  }, []);

  return (
    <div>
      <div id="admin-header">
        <Typography>ADD NEW LABEL</Typography>
      </div>
      <div id="admin-body">
        <AdminAddLabel genres={genres} />
      </div>
    </div>
  );
};

export default Admin;
