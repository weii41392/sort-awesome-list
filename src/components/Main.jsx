import React from 'react';
import { useSnackbar } from 'notistack';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Loading from './Loading';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import EditorPreview from './EditorPreview';
import Copyright from './Copyright';
import { useAuth } from './AuthProvider';
import { initialInput, initialOutput } from '../lib/constants';
import Client from '../lib';
import { labels } from '../lib/configs';

const client = new Client();
const initialOptions = {};
Object.keys(labels).forEach((key) => {
  initialOptions[key] = false;
});

function Main() {
  const { token: authToken, isAuthenticated, doSignIn, doSignOut } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [repoLink, setRepoLink] = React.useState('');
  const [input, setInput] = React.useState(initialInput);
  const [output, setOutput] = React.useState(initialOutput);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoginLogout = () => {
    if (isAuthenticated()) {
      doSignOut().then(() => {
        enqueueSnackbar('Logged out successfully.', { variant: 'success' });
      });
    } else {
      doSignIn().then(() => {
        enqueueSnackbar('Logged in successfully.', { variant: 'success' });
      });
    }
  };
  const handleImport = () => {
    setIsLoading(true);
    client
      .getReadme(repoLink)
      .then(
        (markdown) => {
          setInput(markdown);
          enqueueSnackbar('README file imported.', { variant: 'success' });
        },
        (error) => enqueueSnackbar(error.message, { variant: 'error' })
      )
      .then(() => setIsLoading(false));
  };

  const [optionState, setOptionState] = React.useState(initialOptions);
  const options = Object.keys(labels).map((key) => ({
    key,
    label: labels[key],
    value: optionState[key],
    setValue: (value) => {
      setOptionState((prevState) => ({
        ...prevState,
        [key]: value
      }));
    }
  }));

  const handleSort = () => {
    setIsLoading(true);
    client.updateUrlPatterns(optionState);
    client
      .getSorted(input)
      .then(
        ([markdown, errors]) => {
          errors.forEach((error) => {
            if (Array.isArray(error)) {
              error.forEach((e) => {
                enqueueSnackbar(e.message, { variant: 'error' });
              });
            } else {
              enqueueSnackbar(error.message, { variant: 'error' });
            }
          });
          setOutput(markdown);
          enqueueSnackbar('Sorted successfully.', { variant: 'success' });
        },
        (error) => enqueueSnackbar(error.message, { variant: 'error' })
      )
      .then(() => setIsLoading(false));
  };

  React.useEffect(() => {
    client.updateToken(authToken);
  }, [authToken]);

  return (
    <>
      {isLoading && <Loading />}
      <Navbar
        isAuthenticated={isAuthenticated()}
        onLoginLogout={handleLoginLogout}
      />
      <Box component="main" m={2}>
        <Toolbar />

        {/* Search bar and options */}
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} lg={6} alignSelf="center">
            <SearchBar
              value={repoLink}
              onValueChange={(e) => setRepoLink(e.target.value)}
              onImport={handleImport}
            />
          </Grid>
          <Grid item xs={12} lg={6} alignSelf="center">
            <SortOptions options={options} onSort={handleSort} />
          </Grid>
        </Grid>

        {/* Editor */}
        <Grid container spacing={2} mt={1} mb={3}>
          <Grid item xs={12} lg={6}>
            <EditorPreview name="Input" code={input} onCodeChange={setInput} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EditorPreview name="Output" code={output} canCopy readOnly />
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </>
  );
}

export default Main;
