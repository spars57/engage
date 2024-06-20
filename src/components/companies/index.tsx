import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";
import { GradientTypography } from "../gradient-typography";

const Companies: FC = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  useEffect(() => {
    const handleScroll = () => setIsMobile(isMobileFunction());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      py={isMobile ? 10 : 30}
      sx={{
        backgroundImage: `linear-gradient(to top,${theme.palette.common.black},${theme.palette.grey[900]})`,
      }}
    >
      <Box display={isMobile ? "block" : "flex"} justifyContent={"center"}>
        <Typography
          textAlign={isMobile ? "center" : "left"}
          variant={isMobile ? "h4" : "h4"}
          color="secondary"
        >
          Os nosso profissionais
        </Typography>
        &nbsp;
        <GradientTypography
          textAlign={isMobile ? "center" : "left"}
          variant={isMobile ? "h4" : "h4"}
        >
          ajudam as maiores marcas do mundo
        </GradientTypography>
      </Box>
      <Box mt={5}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndmst1.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndmst2.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndmst3.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndms10.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndmst5.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndms6.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndms7.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndms15.svg"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                width="100%"
                src="https://ninjapromo.io/wp-content/uploads/2024/04/ndms14.svg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Companies;
