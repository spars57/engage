import { Box } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/engage_short_logo.png";
import { RoutePath } from "../../config/routes";
import { isMobile } from "../../utils/is-mobile";

export const Logo: FC<{ width?: number }> = ({
  width = isMobile() ? 140 : 200,
}) => {
  const navigate = useNavigate();
  return (
    <Box display="flex" sx={{ cursor: "pointer" }}>
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
        onClick={() => {
          if (window.location.pathname !== RoutePath.Home) {
            navigate(RoutePath.Home);
            window.scrollTo({ top: 0 });
          }
          document
            .getElementById("banner")
            ?.scrollIntoView({ behavior: "smooth", inline: "start" });
        }}
        src={logo}
      />
    </Box>
  );
};
