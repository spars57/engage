import { Box, Typography } from "@mui/material";
import { smoothScrollTo } from "../../utils/scroll-to-element";

export const Logo = () => {
  return (
    <Box display="flex">
      <Typography
        onClick={() => smoothScrollTo("banner")}
        color="secondary"
        variant="h6"
      >
        ENGAGE LOGO
      </Typography>
    </Box>
  );
};
