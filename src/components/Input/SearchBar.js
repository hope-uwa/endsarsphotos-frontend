import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 240,
    border: '1px solid #ced4da',
    borderRadius: 4,
    height: 36
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: '0px',
    marginRight: '10px'
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
