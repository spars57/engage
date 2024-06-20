import { Box, Fade, Grid, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { GradientButton } from "../gradient-button";
import { GradientTypography } from "../gradient-typography";

import svg from "../../assets/ilustration1.svg";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";
import { smoothScrollTo } from "../../utils/scroll-to-element";

const Banner: FC = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  useEffect(() => {
    const handleScroll = () => setIsMobile(isMobileFunction());
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <Box
      id="banner"
      display="flex"
      sx={{
        backgroundImage: `linear-gradient(to bottom,${theme.palette.common.black},${theme.palette.grey[900]})`,
      }}
      pt={25}
      px={isMobile ? 3 : 10}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box>
            <Slide in={true} direction="down">
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
            <Slide in={true} direction="right">
              <Typography
                variant={isMobile ? "h4" : "h2"}
                color="secondary"
                textAlign={isMobile ? "center" : "left"}
              >
                para a sua empresa
              </Typography>
            </Slide>
            <Slide direction="up" in={true}>
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
            </Slide>
            <Fade in={true}>
              <Box
                display="flex"
                justifyContent={isMobile ? "center" : "left"}
                py={3}
              >
                <GradientButton
                  onClick={() => smoothScrollTo("services")}
                  variant="contained"
                >
                  Saiba mais
                </GradientButton>
              </Box>
            </Fade>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Slide in={true} direction="left">
            <Box py={isMobile ? 6 : 0} display="flex" justifyContent={"center"}>
              <img width={"100%"} src={svg} />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
