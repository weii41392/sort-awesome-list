import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { alpha } from '@mui/material';

function Loading() {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      height="100%"
      width="100%"
      bgcolor={alpha('#000', 0.3)}
      zIndex={10000}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
}

export default Loading;
