import {Grid} from '@material-ui/core';
import SearchBar from 'components/Input/SearchBar';
import {makeStyles} from '@material-ui/core/styles';
import Select from 'components/Input/Select';
import React from 'react';
const useStyles = makeStyles (theme => ({
  root: {
    marginTop: 32,
    marginBottom: 50,
  },
  select: {
      width: 240,
      marginLeft: 20
  }
}));

const SortAndSearch = () => {
  const classes = useStyles ();
  return (
    <Grid
      container
      className={classes.root}
      flexDirection="row"
      justify="flex-end"
      item
    >
      <SearchBar />
      <Select className={classes.select} />
      <Select className={classes.select} />
    </Grid>
  );
};

export default SortAndSearch;
