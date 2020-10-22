import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Box, Typography} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
    root: {
      boxShadow: '0px 4px 4px rgba(196, 196, 196, 0.24)',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
      }
    }
}));

export default function ImageCard () {
  const classes = useStyles ();

  return (
    <Paper className={classes.root}>
      <Box height={259}>
        <img src ={'../../assets/sample.svg'} alt='cover-photo'/>
      </Box>
      <Box padding={2}>
      <Typography variant="h4">
        Standing Together
      </Typography>
      <Typography variant="body2">
        Location: Enugu
      </Typography>
      <Typography variant="body2">
        Posted: 10/10/10 08:20pm
      </Typography>

      </Box>
      

    </Paper>
  );
}
