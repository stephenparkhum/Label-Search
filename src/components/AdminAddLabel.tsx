import { TextField, Box, Select, Button, MenuItem } from '@mui/material';
import { Genres, InputFields, AdminAddLabelProps } from '../types/types';
import { FC } from 'react';

const AdminAddLabel: FC<AdminAddLabelProps> = ({ genres }) => {
  const displayInputFields = (arr: InputFields[]) => {
    return arr.map((field) => {
      return <TextField id={`${field.machineName}`} label={`${field.display}`} />;
    });
  };

  const displayGenres = () => {
    return genres.map((genre: Genres) => {
      return <MenuItem value={genre.slug}>{genre.displayName}</MenuItem>;
    });
  };

  const inputFieldValues: InputFields[] = [
    {
      display: 'Label Name',
      machineName: 'displayName',
    },
    {
      display: 'Email',
      machineName: 'email',
    },
    {
      display: 'Website',
      machineName: 'url',
    },
  ];
  return (
    <>
      <div id="admin-body--form">
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {displayInputFields(inputFieldValues)}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={''}
            label="Genres">
            {displayGenres()}
          </Select>
        </Box>
      </div>
      <div id="admin-body--submit">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            mt: 2,
          }}>
          <Button variant="contained">Submit</Button>
        </Box>
      </div>
    </>
  );
};
export default AdminAddLabel;
