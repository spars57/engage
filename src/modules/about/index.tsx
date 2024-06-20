import { Box, Container, Grid, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../../assets/engage_logo.jpg";
import { GradientTypography } from "../../components/gradient-typography";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";

const About = () => {
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  useEffect(() => {
    const handler = () => setIsMobile(isMobileFunction());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <Box bgcolor={"black"} display="flex">
      <Container maxWidth="lg" sx={{ paddingTop: "80px" }}>
        <Box py={10} mx={isMobile ? 2 : 0}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Slide in={true}>
                <GradientTypography
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                  variant="h4"
                >
                  A nossa história
                </GradientTypography>
              </Slide>
              <Slide direction="right" in={true}>
                <Typography
                  mt={2}
                  variant="body1"
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                >
                  A Engage é uma agência de marketing digital, fundada em 2024
                  por Beatriz Albergaria, licenciada em Enfermagem pelo Escola
                  Superior de Enfermagem de Calouste Gulbenkian de Lisboa e com
                  um vasto background na criação de conteúdo e gestão de redes
                  sociais, contan com mais de 25 mil seguidores espalhados por
                  diversas plataformas digitais.
                  <p></p>
                  Numa era em que existem diversas redes sociais, manter todos
                  os perfis atualizados e repletos de conteúdo inovador pode ser
                  um grande desafio, especialmente quando é necessário gerir
                  tudo de forma independente, por isso
                  <p></p>A Engage oferece apoio a criadores de conteúdo,
                  empresas e influencers, colocando ao seu dispor um leque de
                  profissionais talentosos de diversas áreas de Marketing,
                  Publicidade e Gestão.
                </Typography>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6} mt={isMobile ? 3 : 0}>
              <Slide direction="left" in={true}>
                <img style={{ borderRadius: 10 }} width="100%" src={logo}></img>
              </Slide>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
