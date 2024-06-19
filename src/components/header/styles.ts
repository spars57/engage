import { AppBar, styled } from "@mui/material";

export const HeaderAppBar = styled(AppBar)(() => ({
  transition: "background-color 0.5s, color 0.5s",
  backgroundColor: "rgba(0,0,0,0)",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,.8)",
  },
}));
