import {Grid, TextField, Typography} from '@material-ui/core';
import Button from 'components/Button';
import {DatePickers} from 'components/Input/DatePicker';
import Select from 'components/Input/Select';
import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {
    maxWidth: '83%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 41,
    background: 'rgba(196, 196, 196, 0.1)',
    padding: '50px 41px 100px',
    [theme.breakpoints.down('xs')]: {
        maxWidth: '96%',
        padding: '20px 15px',
        
    }
  },
}));

const AddForm = () => {
  const classes = useStyles ();
  return (
    <Grid container spacing="3" className={classes.root}>
      <Grid item xs={12} sm={6}>
          <Typography variant='body2'>Posting Date</Typography>
        <DatePickers variant="date" />
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant='body2'>Posting Time</Typography>
        <DatePickers variant="time" />
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant='body2'>Posting State</Typography>
        <Select fullWidth />

      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant='body2'>Location</Typography>
        <TextField
          fullWidth
          id="outlined-helperText"
          defaultValue="Default Value"
          helperText=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant='body2'>Description</Typography>
        <TextField
          fullWidth
          id="outlined-helperText"
          defaultValue="Default Value"
          helperText=""
          variant="outlined"
        />

      </Grid>
      <Grid item xs={12} sm={12}>
      <Typography variant='body2'>Note</Typography>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" label="Upload Picture/s" onClick={()=> {}} />
      </Grid>

    </Grid>
  );
};

export default AddForm;
