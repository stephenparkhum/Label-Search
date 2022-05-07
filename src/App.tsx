import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Main from './components/Main';
import { createContext, useState } from 'react';
import data from './data/data';

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
          <AppBar>
            <Container maxWidth={'md'}>
              <Typography variant="h4" component="h4">
                Label Search
              </Typography>
            </Container>
          </AppBar>
        </header>
        <main>
          <Box mt={10}>
            <Main selectedGenre={selectedGenre} onClickUpdate={onClickUpdate} />
          </Box>
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;
