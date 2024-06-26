import { Box, Container, Grid, Slide, Typography } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";
import { GradientTypography } from "../gradient-typography";

type Props = {
  triggeringPoint?: number;
};

const Services: FC<Props> = ({ triggeringPoint = -1 }) => {
  const [isMobile, setIsMobile] = useState(isMobileFunction());
  const [trigger, setTrigger] = useState(window.scrollY > triggeringPoint);

  useEffect(() => {
    const handler = () => setIsMobile(isMobileFunction());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTrigger(true);
      },
      {
        root: null, // use the viewport as the container
        rootMargin: "0px",
        threshold: 0.1, // Adjust this threshold according to your needs
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef]);

  return (
    <Box
      ref={elementRef}
      sx={{ scrollMargin: 100 }}
      id="services"
      bgcolor={"black"}
      pb={20}
    >
      <Slide direction="up" in={trigger}>
        <Container maxWidth="lg">
          <Grid container rowGap={10}>
            <Grid item xs={12}>
              <Box display={isMobile ? "block" : "flex"}>
                <Typography
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                  variant={isMobile ? "h4" : "h4"}
                >
                  Gestão e Consultoria
                </Typography>
                {!isMobile && (
                  <>
                    &nbsp;
                    <Typography
                      color="secondary"
                      textAlign={isMobile ? "center" : "left"}
                      variant={isMobile ? "h4" : "h4"}
                    >
                      de
                    </Typography>
                    &nbsp;
                  </>
                )}
                <GradientTypography
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                  variant={isMobile ? "h6" : "h4"}
                >
                  Redes Sociais
                </GradientTypography>
              </Box>
              <Typography
                mx={isMobile ? 2 : 0}
                mt={3}
                variant="body1"
                color="secondary"
                textAlign={isMobile ? "center" : "left"}
              >
                A gestão e consultoria de redes sociais é um serviço essencial
                para empresas e indivíduos que desejam otimizar a sua presença
                digital e alcançar os seus objetivos de marketing através das
                plataformas sociais. Este serviço abrange uma ampla gama de
                atividades que ajudam a construir, gerir e melhorar o desempenho
                das redes sociais.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display={isMobile ? "block" : "flex"}>
                <Typography
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                  variant={isMobile ? "h4" : "h4"}
                >
                  Agênciamento
                </Typography>
                {!isMobile && (
                  <>
                    &nbsp;
                    <Typography
                      color="secondary"
                      textAlign={isMobile ? "center" : "left"}
                      variant={isMobile ? "h4" : "h4"}
                    >
                      de
                    </Typography>
                    &nbsp;
                  </>
                )}
                <GradientTypography
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                  variant={isMobile ? "h6" : "h4"}
                >
                  Influencers Digitais
                </GradientTypography>
              </Box>
              <Typography
                mx={isMobile ? 2 : 0}
                mt={3}
                variant="body1"
                color="secondary"
                textAlign={isMobile ? "center" : "left"}
              >
                O agenciamento de influencers é um serviço especializado que
                visa gerir e representar influenciadores digitais, ajudando-os a
                maximizar o seu potencial e a obter oportunidades de colaboração
                com marcas e empresas. Este serviço envolve uma série de
                atividades que facilitam a carreira dos influenciadores,
                permitindo-lhes focar-se na criação de conteúdo e no
                envolvimento com o seu público.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display={isMobile ? "block" : "flex"}>
                <Typography
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                  variant={isMobile ? "h4" : "h4"}
                >
                  Campanhas
                </Typography>
                {!isMobile && (
                  <>
                    &nbsp;
                    <Typography
                      color="secondary"
                      textAlign={isMobile ? "center" : "left"}
                      variant={isMobile ? "h4" : "h4"}
                    >
                      de
                    </Typography>
                    &nbsp;
                  </>
                )}
                <GradientTypography
                  color="secondary"
                  textAlign={isMobile ? "center" : "left"}
                  variant={isMobile ? "h6" : "h4"}
                >
                  Marketing de Influência
                </GradientTypography>
              </Box>
              <Typography
                mx={isMobile ? 2 : 0}
                mt={3}
                variant="body1"
                color="secondary"
                textAlign={isMobile ? "center" : "left"}
              >
                As campanhas de marketing de influência são uma estratégia de
                marketing que envolve a colaboração com influenciadores para
                promover produtos, serviços ou marcas. Os influenciadores são
                indivíduos que possuem uma base de seguidores significativa e
                engajada nas redes sociais, blogs ou outras plataformas
                digitais, e que têm a capacidade de influenciar as opiniões e
                comportamentos do seu público.
                <p></p>
                Estas campanhas funcionam ao tirar partido da credibilidade e do
                alcance dos influenciadores para transmitir a mensagem da marca
                de forma autêntica e convincente. Em vez de utilizar métodos
                tradicionais de publicidade, que muitas vezes são percebidos
                como impessoais ou intrusivos, o marketing de influência utiliza
                a voz e a experiência dos influenciadores para criar uma conexão
                mais genuína com os consumidores.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Slide>
    </Box>
  );
};

export default Services;
