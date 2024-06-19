import { AppBar, styled } from "@mui/material";

export const HeaderAppBar = styled(AppBar)(() => ({
  transition: "background-color 0.8s, color 0.8s",
  backgroundColor: "rgba(0,0,0,0)",
  //boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,.6)",
    //color: theme.palette.primary.main,
  },
}));
