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
      letterSpacing: 1.4,
      fontFamily: "signika-medium",
    },
    h6: {
      fontWeight: "bold",
    },
  },
});
