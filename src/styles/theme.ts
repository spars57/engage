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
      fontFamily: "league-spartan-medium",
    },
    h6: {
      fontFamily: "league-spartan-bold",
    },
    h5: {
      fontFamily: "league-spartan-bold",
    },
    h4: {
      fontFamily: "league-spartan-bold",
    },
    h3: {
      fontFamily: "league-spartan-bold",
    },
    h2: {
      fontFamily: "league-spartan-bold",
    },
    h1: {
      fontFamily: "league-spartan-bold",
    },

    body1: {
      fontFamily: "league-spartan-medium",
    },
    body2: {
      fontFamily: "league-spartan-medium",
    },
    subtitle1: {
      fontSize: 20,
    },
    button: {
      fontFamily: "league-spartan-bold",
    },
  },
});
