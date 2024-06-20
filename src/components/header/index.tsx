import { Close, Menu } from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../config/routes";
import { isMobile } from "../../utils/is-mobile";
import { smoothScrollTo } from "../../utils/scroll-to-element";
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

const StyledTypography = styled(Typography)(({ theme }) => ({
  transition: "color 0.5s",
  "&:hover": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const Header: FC = () => {
  const [mobile, setMobile] = useState(isMobile());
  const [opacityTrigger, setOpacityTrigger] = useState(window.scrollY > 577);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

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
              onClick={() => {
                onClose();
                navigate(RoutePath.Home);
                smoothScrollTo("banner");
              }}
              color="secondary"
              py={2}
              mx={2}
            >
              Home
            </StyledTypography>
            <StyledTypography
              onClick={() => {
                onClose();
                navigate(RoutePath.About);
              }}
              color="secondary"
              py={2}
              mx={2}
            >
              Sobre
            </StyledTypography>
            <StyledTypography
              onClick={() => {
                onClose();
                smoothScrollTo("services");
              }}
              color="secondary"
              py={2}
              mx={2}
            >
              Serviços
            </StyledTypography>
            <StyledTypography
              onClick={() => {
                onClose();
                navigate(RoutePath.Portfolio);
              }}
              color="secondary"
              py={2}
              mx={2}
            >
              Portfolio
            </StyledTypography>
            <StyledTypography
              onClick={() => {
                onClose();
                navigate(RoutePath.Contact);
              }}
              color="secondary"
              py={2}
              mx={2}
            >
              Contactos
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
              onClick={() => navigate(RoutePath.Home)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Home
            </StyledTypography>
            <StyledTypography
              onClick={() => navigate(RoutePath.About)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Sobre
            </StyledTypography>
            <StyledTypography
              onClick={() => smoothScrollTo("services")}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Serviços
            </StyledTypography>
            <StyledTypography
              onClick={() => navigate(RoutePath.Portfolio)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Portfolio
            </StyledTypography>
            <StyledTypography
              onClick={() => navigate(RoutePath.Contact)}
              fontSize={18}
              color="secondary"
              mx={2}
            >
              Contactos
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
