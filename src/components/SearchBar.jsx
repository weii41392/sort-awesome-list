import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

function SearchBar({ value, onValueChange, onImport }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 400,
          height: 40,
          borderRadius: 3
        }}
      >
        <InputBase
          value={value}
          onChange={onValueChange}
          sx={{ mx: 2, flex: 1 }}
          placeholder="https://github.com/link/to/awesome-list"
        />
      </Paper>
      <Button
        variant="contained"
        onClick={onImport}
        sx={{ borderRadius: 3, height: 35, width: 80 }}
      >
        Import
      </Button>
    </Box>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired
};

export default SearchBar;
