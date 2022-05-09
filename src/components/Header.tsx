import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth={'md'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h4">
            Label Search
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mr: 2,
                }}>
                <HomeIcon />
              </Box>
            </Link>
            <Link to="/admin">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <SettingsIcon />
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
