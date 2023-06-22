import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`Copyright © ${new Date().getFullYear()} by `}
      <Link
        color="inherit"
        underline="hover"
        target="_blank"
        rel="noopener noreferrer"
        href="https://weii41392.github.io/"
      >
        Wei-Jie Huang
      </Link>
    </Typography>
  );
}
