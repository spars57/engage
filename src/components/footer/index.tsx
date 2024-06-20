import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Logo } from "../logo";
import SocialMediaFooterComponent from "./social-media";

const Footer: FC = () => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection={"column"}>
      <Container maxWidth="lg">
        <Box
          py={2}
          display="flex"
          alignItems={"center"}
          width="100%"
          justifyContent="space-between"
        >
          <Logo />
          <SocialMediaFooterComponent />
        </Box>
      </Container>

      <Box>
        <Divider sx={{ backgroundColor: theme.palette.grey[800] }} />
      </Box>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          py={2}
        >
          <Typography variant="caption" color="secondary">
            Copyright © 2024 ENGAGE
          </Typography>
          <Box display="flex" alignItems={"center"}>
            <Box mx={2}>
              <Typography variant="caption" color="secondary">
                Termos e Condições
              </Typography>
            </Box>
            <Box mx={2}>
              <Typography variant="caption" color="secondary">
                Politicas de Privacidade
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
