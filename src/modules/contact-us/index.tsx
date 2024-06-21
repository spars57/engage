import { Email } from "@mui/icons-material";
import { Box, Container, Grid, Link, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GradientButton } from "../../components/gradient-button";
import { GradientTypography } from "../../components/gradient-typography";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";

const BUTTON_WIDTH = 300;

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  useEffect(() => {
    const handler = () => setIsMobile(isMobileFunction());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <Box bgcolor={"black"} display="flex">
      <Container maxWidth="lg" sx={{ paddingTop: "80px" }}>
        <Box py={10} mx={isMobile ? 2 : 0} minHeight="80dvh">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Slide in={true}>
                <GradientTypography
                  color="secondary"
                  textAlign={"center"}
                  variant="h4"
                >
                  Entre em contacto connosco
                </GradientTypography>
              </Slide>
              <Slide direction="right" in={true}>
                <Typography
                  mt={2}
                  variant="body1"
                  color="secondary"
                  textAlign={"center"}
                >
                  Envie-nos um email ou entre em contacto connosco através das
                  nossas redes sociais.
                </Typography>
              </Slide>
              <Slide direction="up" in={true}>
                <Box
                  py={3}
                  display="flex"
                  width="100%"
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
                  <Box p={1} display="flex" justifyContent={"center"}>
                    <GradientButton
                      sx={{
                        width: BUTTON_WIDTH,
                      }}
                      variant="contained"
                      startIcon={<Email />}
                    >
                      <Link
                        color="primary.contrastText"
                        sx={{ textDecoration: "none" }}
                        href="mailto:geral@engageagency.pt"
                      >
                        geral@engageagency.pt
                      </Link>
                    </GradientButton>
                  </Box>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
