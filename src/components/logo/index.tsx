import { Box } from "@mui/material";
import { FC } from "react";
import logo from "../../assets/engage_short_logo.png";
import { isMobile } from "../../utils/is-mobile";
import { smoothScrollTo } from "../../utils/scroll-to-element";

export const Logo: FC<{ width?: number }> = ({
  width = isMobile() ? 130 : 200,
}) => {
  return (
    <Box display="flex">
      {/* <Typography
        onClick={() => smoothScrollTo("banner")}
        color="secondary"
        variant="h5"
      >
        ENGAGE LOGO
      </Typography> */}
      <img
        width={width}
        style={{ filter: "invert(1)" }}
        onClick={() => smoothScrollTo("banner")}
        src={logo}
      />
    </Box>
  );
};
