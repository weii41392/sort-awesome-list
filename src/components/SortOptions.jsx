import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Option({ label, checked, onChange }) {
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      sx={{ my: -1 }}
    >
      <Checkbox checked={checked} onChange={onChange} size="small" />
      <Typography variant="subtitle2" noWrap>
        {label}
      </Typography>
    </Box>
  );
}

Option.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

function SortOptions({ options, onSort }) {
  return (
    <Box
      display="flex"
      flex
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      <Box display="flex" flexWrap="wrap" width="40%">
        {options.map((option) => (
          <Option
            key={option.key}
            label={option.label}
            checked={option.value}
            onChange={(e) => option.setValue(e.target.checked)}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        onClick={onSort}
        sx={{ borderRadius: 3, height: 35, width: 80 }}
      >
        Sort
      </Button>
    </Box>
  );
}

SortOptions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSort: PropTypes.func.isRequired
};

export default SortOptions;
