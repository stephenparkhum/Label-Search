import { Typography, TextField } from '@mui/material';

const Admin = () => {
  return (
    <div>
      <Typography>Admin Page</Typography>
      <div id="admin-login">
        <TextField id="filled-basic" label="Display Name" variant="filled" />
        <TextField id="filled-basic" label="Slug" variant="filled" />
        <TextField id="filled-basic" label="Tits" variant="filled" />
      </div>
    </div>
  );
};

export default Admin;
