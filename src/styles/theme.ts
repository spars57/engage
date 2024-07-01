import { createTheme } from '@mui/material'

export const Theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '000000',
      light: 'FFFFFF',
      dark: '000000',
    },
    primary: {
      main: '#FFD700',
      contrastText: '#000000',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  typography: {
    allVariants: {
      letterSpacing: 1,
      fontFamily: 'league-spartan-light',
    },
    h6: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h1: {
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: 20,
    },
    button: {
      fontFamily: 'league-spartan-medium',
    },
  },
})
