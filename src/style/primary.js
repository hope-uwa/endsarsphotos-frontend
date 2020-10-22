import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#1B4942',
      light: '#e8eff7',
      contrastText: '#F4F9F9',
    },
    secondary: {
      main: '#1B4942',
      light: '#1b4942bd',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#C4C4C4',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'].join (','),
  },
});

theme.overrides = {
  MuiTypography: {
    h1: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 21,
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 18,
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 14,
      fontWeight: 600,
    },
    h5: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 12,
      fontWeight: 600,
    },
    body1: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
    },
    body2: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 14,
      fontWeight: 'normal',
    },
    caption: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 12,
      fontWeight: 'normal',
    },
  },
  MuiBackdrop: {
    root: {
      backgroundColor: '#9ec1e3a6',
    },
  },
  MuiPickersToolbar : {
    toolbar: {
      backgroundColor: theme.palette.secondary.light
    } 
  },
  MuiButton: {
    root: {
      minHeight: 38,
      borderRadius: '4px',
      fontFamily: theme.typography.fontFamily,
      fontSize: 12,
      boxShadow: 'none',
      textTransform: 'inherit',
      fontWeight: 600,
      minWidth: 90,
    },
    contained : {
      backgroundColor: 'white',
      color: theme.palette.secondary.main
    },
    outlinedPrimary: {
      border: 'solid 1px #3b88b4',
      background: '#fff',
      color: '#3b88b4',
      '&:hover': {
        backgroundColor: '#e8eff7',
      },
    },
    disabled: {
      color: '#E0E0E0',
    },
  },
  MuiInputBase: {
    root: {
      fontSize: 14,
      minHeight: 40,
      paddingLeft :20,
      
    },
    input: {
      
      '&::placeholder': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        fontWeight: 'normal',
      },
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: 0
    },
    root: {
      background: 'white'
    },
    multiline: {
      paddingLeft: 20
    }
  },

  MuiFormControlLabel: {
    root: {
      marginLeft: 0,
      color: theme.palette.secondary.main,
    },
  },
  MuiSelect: {
    select: {
      marginLeft: -20,
      padding: theme.spacing (1.5),
    },
  },
  MuiInput: {
    underline: {
      '&:after': {
        display: 'none',
      },
      '&:before': {
        display: 'none',
      },
    },
  },
  MuiFormControl : {
    marginNormal: {
      margin: 0,
      marginTop: 0,
      marginBottom: 0,
      width: '100%',
      border: '1px solid #DADADA',
      background: 'white',
      borderRadius: 4

    }
  },
  MuiFormLabel: {
    root: {
      fontSize: 12,
    },
  },
  MuiListItem: {
    root: {
      backgroundColor: 'white !important',
    },
  },

};
export default theme;
