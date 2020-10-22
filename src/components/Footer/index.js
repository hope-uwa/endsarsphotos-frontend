import {Box, Typography} from '@material-ui/core';
import React from 'react';
import theme from 'style/primary';

export const Footer = () => (
  <Box
    // position="absolute"
    width='100%'
    bottom={0}
    mt={8}
    display="flex"
    height="60px"
    bgcolor={theme.palette.secondary.main}
    justifyContent="center"
    alignItems="center"
  >
    <Typography color='white'> Built with</Typography>
  </Box>
);
