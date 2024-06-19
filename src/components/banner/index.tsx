import { Box, Grid, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { GradientButton } from "../gradient-button";
import { GradientTypography } from "../gradient-typography";

import svg from "../../assets/ilustration1.svg";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";

const Banner: FC = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  useEffect(() => {
    const handleScroll = () => setIsMobile(isMobileFunction());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      display="flex"
      sx={{
        backgroundImage: `linear-gradient(to bottom,${theme.palette.common.black},${theme.palette.grey[900]})`,
      }}
      pt={25}
      pb={15}
      px={10}
    >
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box>
            <Slide in={true} direction="right">
              <Typography
                color="secondary"
                variant={isMobile ? "h4" : "h2"}
                textAlign={isMobile ? "center" : "left"}
              >
                Encontre
              </Typography>
            </Slide>
            <Slide in={true} direction="left">
              <GradientTypography
                variant={isMobile ? "h4" : "h2"}
                textAlign={isMobile ? "center" : "left"}
              >
                {" "}
                profissionais talentosos
              </GradientTypography>
            </Slide>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              color="secondary"
              textAlign={isMobile ? "center" : "left"}
            >
              para a sua empresa
            </Typography>
            <Box mt={3} width={isMobile ? "100%" : "75%"}>
              <Typography
                variant="body1"
                color="secondary"
                textAlign={isMobile ? "center" : "left"}
              >
                A Engage é uma agência de marketing digital especializada em
                redes sociais, trabalhamos com diversos profissionais em áreas
                de desenvolvimento, marketing, publicidade e criação de
                contéudo.
                <p></p>
                Ao escolher o nosso serviço terá acesso a uma vasta gama de
                profissionais talentosos que irão impulsionar os resultados da
                sua empresa para o próximo nível.
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent={isMobile ? "center" : "left"}
              py={3}
            >
              <GradientButton variant="contained">Saiba mais</GradientButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box py={isMobile ? 6 : 0} display="flex" justifyContent={"center"}>
            <img width={"100%"} src={svg} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
