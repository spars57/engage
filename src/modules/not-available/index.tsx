import { Box, Container, Grid, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GradientButton } from "../../components/gradient-button";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";

const NotAvailable = () => {
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
              <Slide direction="down" in={true}>
                <Typography
                  mt={2}
                  variant="h4"
                  color="secondary"
                  textAlign={"center"}
                >
                  Esta página ainda não está disponível
                </Typography>
              </Slide>
              <Slide direction="right" in={true}>
                <Box mt={1} display="flex" justifyContent={"center"}>
                  <GradientButton sx={{ color: "black", width: 200 }}>
                    Voltar ao Início
                  </GradientButton>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default NotAvailable;
