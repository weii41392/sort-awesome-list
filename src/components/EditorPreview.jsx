import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';

function EditorPreview({
  name,
  code,
  onCodeChange,
  canCopy = false,
  readOnly = false
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [isPreview, setIsPreview] = React.useState(false);
  const buttonText = isPreview ? 'View Source' : 'Preview';
  const handleSwitch = () => setIsPreview(!isPreview);
  const handleCopy = () =>
    enqueueSnackbar('Copied to clipboard.', { variant: 'success' });

  return (
    <Paper>
      <Box display="flex" alignItems="center" px={2}>
        <Box flexGrow={1}>
          <Typography variant="h6">{name}</Typography>
        </Box>
        {canCopy && !isPreview && (
          <CopyToClipboard text={code}>
            <IconButton title="Copy to clipboard" onClick={handleCopy}>
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </CopyToClipboard>
        )}
        <Button onClick={handleSwitch}>{buttonText}</Button>
      </Box>
      <Divider />
      <Box maxHeight="65vh" overflow="auto">
        {isPreview ? (
          <CodePreview source={code} />
        ) : (
          <CodeEditor
            value={code}
            onChange={onCodeChange}
            readOnly={readOnly}
          />
        )}
      </Box>
    </Paper>
  );
}

EditorPreview.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onCodeChange: PropTypes.func,
  canCopy: PropTypes.bool,
  readOnly: PropTypes.bool
};

EditorPreview.defaultProps = {
  onCodeChange: () => {},
  canCopy: false,
  readOnly: false
};

export default EditorPreview;
