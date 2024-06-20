import { Close, Menu } from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../config/routes";
import { isMobile } from "../../utils/is-mobile";
import { Logo } from "../logo";
import { HeaderAppBar } from "./styles";

const StyledMenuItem = styled(Menu)(({ theme }) => ({
  transition: "color 0.5s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledCloseIcon = styled(Close)(({ theme }) => ({
  transition: "color 0.5s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const getColor = (path: RoutePath, theme: Theme) => {
  if (path === RoutePath.Home) {
    return theme.palette.secondary.main;
  }
  return window.location.pathname === path
    ? theme.palette.primary.main
    : theme.palette.secondary.main;
};

const StyledTypography = styled(Typography)<{ route?: RoutePath }>(
  ({ theme, route = RoutePath.Portfolio }) => ({
    transition: "color 0.5s",
    color: getColor(route, theme),
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  })
);

const Header: FC = () => {
  const [mobile, setMobile] = useState(isMobile());
  const [opacityTrigger, setOpacityTrigger] = useState(window.scrollY > 577);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onRouteClick = (route: RoutePath) => () => {
    onClose();
    navigate(route);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handler = () => setMobile(isMobile());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const handler = () => setOpacityTrigger(window.scrollY > 577);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <HeaderAppBar id="header" triggerOpacity={opacityTrigger}>
      <Drawer open={open} onClose={onClose}>
        <Box
          flexGrow={1}
          bgcolor="#000000"
          display="flex"
          flexDirection={"column"}
          width="100dvw"
        >
          <Container maxWidth={"lg"}>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              height={80}
            >
              <Logo />
              <Typography color="secondary" mx={2}>
                <IconButton onClick={onClose}>
                  <StyledCloseIcon color="secondary" />
                </IconButton>
              </Typography>
            </Box>
            <StyledTypography
              route={RoutePath.Home}
              onClick={onRouteClick(RoutePath.Home)}
              color="secondary"
              py={2}
              mx={2}
            >
              Início
            </StyledTypography>
            <StyledTypography
              route={RoutePath.About}
              onClick={onRouteClick(RoutePath.About)}
              color={
                window.location.href.includes(RoutePath.About)
                  ? "primary"
                  : "secondary"
              }
              py={2}
              mx={2}
            >
              Sobre
            </StyledTypography>
            <StyledTypography
              route={RoutePath.Services}
              onClick={onRouteClick(RoutePath.Services)}
              color="secondary"
              py={2}
              mx={2}
            >
              Serviços
            </StyledTypography>

            <StyledTypography
              route={RoutePath.Contact}
              onClick={onRouteClick(RoutePath.Contact)}
              color="secondary"
              py={2}
              mx={2}
            >
              Contacte-nos
            </StyledTypography>
          </Container>
        </Box>
      </Drawer>
      <Container maxWidth={"lg"}>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
          height={80}
        >
          <Logo />
          <Box
            hidden={mobile}
            display={mobile ? "none" : "flex"}
            alignItems="center"
          >
            <StyledTypography
              route={RoutePath.Home}
              onClick={onRouteClick(RoutePath.Home)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Início
            </StyledTypography>
            <StyledTypography
              route={RoutePath.About}
              onClick={onRouteClick(RoutePath.About)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Sobre
            </StyledTypography>
            <StyledTypography
              route={RoutePath.Services}
              onClick={onRouteClick(RoutePath.Services)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Serviços
            </StyledTypography>
            {/* <StyledTypography
              onClick={() => navigate(RoutePath.Portfolio)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Portfolio
            </StyledTypography> */}
            <StyledTypography
              route={RoutePath.Contact}
              onClick={onRouteClick(RoutePath.Contact)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Contacte-nos
            </StyledTypography>
          </Box>
          <Box hidden={!mobile}>
            <Typography color="secondary" mx={2}>
              <IconButton onClick={onOpen}>
                <StyledMenuItem color="secondary" />
              </IconButton>
            </Typography>
          </Box>
        </Box>
      </Container>
    </HeaderAppBar>
  );
};

export default Header;
