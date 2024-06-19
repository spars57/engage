import { Button, styled } from "@mui/material";

export const GradientButton = styled(Button)({
  transition: "transform 0.5s",
  backgroundImage: "linear-gradient(to right,#ff75c3,#ffa647,#ffe83f)",
  "&:hover": {
    transform: "translateY(-2px)",
    backgroundImage: "linear-gradient(to left,#ff75c3,#ffa647,#ffe83f)",
  },
});
