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
  },
  typography: {
    allVariants: {
      fontFamily: "signika-medium",
    },
    h6: {
      fontWeight: "bold",
    },
  },
});
