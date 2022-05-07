import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Main from './components/Main';
import { createContext, useState } from 'react';

import data from './data/data';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const DataContext = createContext(data);
  const [selectedGenre, setSelectedGenre] = useState('all');

  const onClickUpdate = (val: string): void => {
    setSelectedGenre(val);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <DataContext.Provider value={data}>
        <div className="App" style={{ backgroundColor: 'dark' }}>
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
    </ThemeProvider>
  );
}

export default App;
