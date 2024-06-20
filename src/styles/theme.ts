import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    secondary: {
      main: "#FFFFFF",
      contrastText: "000000",
      light: "FFFFFF",
      dark: "000000",
    },
    primary: {
      main: "#FFD700",
      contrastText: "#000000",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  typography: {
    allVariants: {
      letterSpacing: 1,
      fontFamily: "signika-medium",
    },
    h6: {
      fontFamily: "signika-bold",
    },
    h5: {
      fontFamily: "signika-bold",
    },
    h4: {
      fontFamily: "signika-bold",
    },
    h3: {
      fontFamily: "signika-bold",
    },
    h2: {
      fontFamily: "signika-bold",
    },
    h1: {
      fontFamily: "signika-bold",
    },

    body1: {
      fontFamily: "signika-medium",
    },
    body2: {
      fontFamily: "signika-medium",
    },
    subtitle1: {
      fontSize: 20,
    },
    button: {
      fontFamily: "signika-bold",
    },
  },
});
