import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import GitHubIcon from './GitHubIcon';

function Navbar({ isAuthenticated, onLoginLogout }) {
  return (
    <AppBar component="nav" color="dark">
      <Toolbar>
        <Box flexGrow={1}>
          <Link
            variant="h6"
            color="inherit"
            underline="hover"
            href="https://github.com/weii41392/sort-awesome-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            sort-awesome-list
          </Link>
        </Box>
        <Button color="neutral" variant="contained" onClick={onLoginLogout}>
          <GitHubIcon />
          &nbsp;
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLoginLogout: PropTypes.func.isRequired
};

export default Navbar;
