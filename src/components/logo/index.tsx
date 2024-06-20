import { Box } from "@mui/material";
import { smoothScrollTo } from "../../utils/scroll-to-element";
import { GradientTypography } from "../gradient-typography";

export const Logo = () => {
  return (
    <Box display="flex">
      <GradientTypography
        onClick={() => smoothScrollTo("banner")}
        color="secondary"
        variant="h6"
      >
        ENGAGE LOGO
      </GradientTypography>
    </Box>
  );
};
