import { Box, Container } from '@mui/material';
import Main from './components/Main';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import data from './data/data';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Admin from './components/Admin';

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
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme={true} />
        <DataContext.Provider value={data}>
          <div className="App" style={{ backgroundColor: 'dark' }}>
            <header>
              <Header />
            </header>
            <main>
              <Container maxWidth={'md'}>
                <Box sx={{ mt: 10 }}>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Main selectedGenre={selectedGenre} onClickUpdate={onClickUpdate} />
                      }></Route>
                    <Route path="admin" element={<Admin />} />
                  </Routes>
                </Box>
              </Container>
            </main>
          </div>
        </DataContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
