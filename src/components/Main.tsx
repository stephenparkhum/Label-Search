import { Button, ButtonGroup, TextField, Container, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import LabelList from './LabelList';
import { Genres, MainProps } from '../types/types';
import { genresRef } from '../firebaseSetup';

const Main: FC<MainProps> = ({ selectedGenre, onClickUpdate }) => {
  const appMaxWidth = 'md';
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

  const cleanGenreDisplayText = (val: string | null) => {
    if (val !== null) {
      val = val.toLowerCase();
      const valSplit = val.split(' ');
      return valSplit.join('-');
    }
  };

  const displayGenres = () => {
    return genres.map((genre) => {
      return (
        <Button
          key={genre.slug}
          variant={selectedGenre === genre.slug ? 'contained' : 'outlined'}
          onClick={(e) => onClickUpdate(cleanGenreDisplayText(e.currentTarget.textContent))}>
          {genre.displayName}
        </Button>
      );
    });
  };

  return (
    <Container maxWidth={appMaxWidth}>
      {/* <div id="search-container">
        <TextField id="filled-basic" label="Search label..." variant="filled" fullWidth={true} />
      </div> */}
      <div id="genres-container">
        <Typography>
          <h2>Genres</h2>
        </Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {displayGenres()}
        </ButtonGroup>
      </div>
      <div id="labels-container">
        <Typography>
          <h2>Labels</h2>
        </Typography>
        <LabelList selectedGenre={selectedGenre} />
      </div>
    </Container>
  );
};

export default Main;
