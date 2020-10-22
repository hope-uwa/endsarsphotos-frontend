import {Box, Grid} from '@material-ui/core';
import React from 'react';
import Button from 'components/Button';

import {makeStyles, createStyles} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import theme from 'style/primary';

const useHeaderStyles = makeStyles (theme =>
  createStyles ({
    root: {
      height: 80,
      paddingLeft: '5%',
      paddingRight: '5%',
      maxWidth: 1440,
      margin: 'auto'
    },
    uploadButton: {

    }
  })
);



const Header = () => {
  const classes = useHeaderStyles ();

  const history = useHistory();
  return (
    <Box height={80} bgcolor={theme.palette.secondary.main}> 
      <Grid
        container
        className={classes.root}
        justify="space-between"
        alignItems="center"
      >
        <Box display="flex">
          <Box>Logo</Box>
          {['Pictures', 'Videos', 'Biography'].map (menu => (
            <Box color="white" onClick={() => {}} mx={3.5}>
              {menu}
            </Box>
          ))}
        </Box>
        <Button label="UPLOAD PHOTO" variant="contained" btnClass={classes.uploadButton} onClick={() => history.push('/add-photos')} /> 
      </Grid>
    </Box>
  );
};

export default Header;
