import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './components/AuthProvider';
import SnackbarCloseButton from './components/SnackbarCloseButton';
import Main from './components/Main';

const theme = createTheme({
  typography: {
    fontFamily:
      '"Nunito Sans", -apple-system, system-ui, BlinkMacSystemFont, ' +
      '"Segoe UI", Roboto, "Helvetica Neue", "Arial", "Noto Sans", sans-serif',
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    text: {
      primary: '#2d2e30'
    },
    background: {
      default: '#f3f3f3'
    },
    dark: {
      main: '#2d2e30',
      contrastText: '#f3f3f3'
    },
    neutral: {
      main: '#f3f3f3',
      dark: '#ccc',
      contrastText: '#2d2e30'
    }
  }
});

const closeSnackbar = (key) => <SnackbarCloseButton snackbarKey={key} />;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider action={closeSnackbar} dense preventDuplicate>
        <AuthProvider>
          <CssBaseline />
          <Main />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
