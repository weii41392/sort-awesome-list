import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SnackbarCloseButton({ snackbarKey }) {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <CloseIcon htmlColor="#fff" />
    </IconButton>
  );
}

SnackbarCloseButton.propTypes = {
  snackbarKey: PropTypes.number.isRequired
};
