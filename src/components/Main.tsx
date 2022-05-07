import { Button, ButtonGroup, TextField, Container } from '@mui/material';
import { FC } from 'react';
import data from '../data/data';
import LabelList from './LabelList';
import { MainProps } from '../types/types';
import firebase from '../firebase';

const Main: FC<MainProps> = ({ selectedGenre, onClickUpdate }) => {
  const appMaxWidth = 'md';
  const { genres } = data;
  console.log(firebase);

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
          variant={selectedGenre === genre.slug ? 'contained' : 'outlined'}
          onClick={(e) => onClickUpdate(cleanGenreDisplayText(e.currentTarget.textContent))}>
          {genre.displayName}
        </Button>
      );
    });
  };

  return (
    <Container maxWidth={appMaxWidth}>
      <div id="search-container">
        <TextField id="filled-basic" label="Search label..." variant="filled" fullWidth={true} />
      </div>
      <div id="genres-container">
        <h2>Genres</h2>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {displayGenres()}
        </ButtonGroup>
      </div>
      <div id="labels-container">
        <h2>Labels</h2>
        <LabelList selectedGenre={selectedGenre} />
      </div>
    </Container>
  );
};

export default Main;
