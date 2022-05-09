import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth={'md'}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" component="h4">
            Label Search
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/admin">
              <Typography>Admin</Typography>
              <SettingsIcon />
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
