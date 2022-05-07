import { Container } from '@mui/material';
import Main from './components/Main';
import { createContext, useState } from 'react';
import data from './data/data';
import { genres, getGenres } from './firebaseSetup';

function App() {
  const DataContext = createContext(data);
  const [selectedGenre, setSelectedGenre] = useState('all');

  const onClickUpdate = (val: string): void => {
    setSelectedGenre(val);
  };

  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <header>
          <Container maxWidth={'md'}>
            <h1>Label Search</h1>
          </Container>
        </header>
        <main>
          <Main selectedGenre={selectedGenre} onClickUpdate={onClickUpdate} />
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;
