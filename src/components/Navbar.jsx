import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubButton from 'react-github-btn';
import GitHubIcon from './GitHubIcon';

function Navbar({ isAuthenticated, onLoginLogout }) {
  return (
    <AppBar component="nav" color="dark">
      <Toolbar>
        <Box display="flex" flexGrow={1} flexDirection="row">
          <Typography variant="h6" color="inherit">
            sort-awesome-list
          </Typography>
          <Box sx={{ alignSelf: 'end', mx: 1 }}>
            <GitHubButton
              href="https://github.com/weii41392/sort-awesome-list"
              aria-label="Star weii41392/sort-awesome-list on GitHub"
            >
              Star
            </GitHubButton>
          </Box>
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
