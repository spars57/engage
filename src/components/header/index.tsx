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

const StyledTypography = styled(Typography)(({ theme }) => ({
  transition: "color 0.5s",
  "&:hover": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const Header: FC = () => {
  const [mobile, setMobile] = useState(isMobile());
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    const handler = () => {
      setMobile(isMobile());
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <HeaderAppBar>
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
            <StyledTypography color="secondary" py={2} mx={2}>
              Home
            </StyledTypography>
            <StyledTypography color="secondary" py={2} mx={2}>
              Sobre
            </StyledTypography>
            <StyledTypography color="secondary" py={2} mx={2}>
              Serviços
            </StyledTypography>
            <StyledTypography color="secondary" py={2} mx={2}>
              Portfolio
            </StyledTypography>
            <StyledTypography color="secondary" py={2} mx={2}>
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
            <StyledTypography fontSize={18} color="secondary" mx={2}>
              Home
            </StyledTypography>
            <StyledTypography fontSize={18} color="secondary" mx={2}>
              Sobre
            </StyledTypography>
            <StyledTypography fontSize={18} color="secondary" mx={2}>
              Serviços
            </StyledTypography>
            <StyledTypography fontSize={18} color="secondary" mx={2}>
              Portfolio
            </StyledTypography>
            <StyledTypography fontSize={18} color="secondary" mx={2}>
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
