import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

const useHeroStyles = makeStyles (theme =>
  createStyles ({
    root: {
      height: 500,
      backgroundColor: '#f5f5f5'
    },
  })
);

export const Hero = () => {
  const classes = useHeroStyles ();
  return <Box className={classes.root} />;
};
