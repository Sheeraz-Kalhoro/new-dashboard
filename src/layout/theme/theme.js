import * as React from 'react';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
      
    secondary:{
        // main: blue[50]
        main: "#e3f2fd"
    }
  },
});

