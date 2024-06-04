// src/theme/themes.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3060a1',
    },
    background: {
      default: '#1a1a1a',
      paper: '#333333',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default darkTheme;
