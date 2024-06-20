import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";
import { GradientTypography } from "../gradient-typography";

const Services = () => {
  const [isMobile, setIsMobile] = useState(isMobileFunction());

  useEffect(() => {
    const handleScroll = () => setIsMobile(isMobileFunction());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box id="services" bgcolor={"black"} pb={20}>
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
              {isMobile ? <></> : <>&nbsp;</>}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat, nulla in sagittis tristique, justo ante porta erat, ac
              tincidunt magna ante eget turpis. Etiam lacus dui, vulputate nec
              tellus ac, aliquam varius tellus. Nam sollicitudin gravida ex, non
              dictum purus vulputate sed. Cras fermentum mauris eu lacinia
              vestibulum.
              <p></p>
              Vestibulum consequat dolor quis facilisis varius. Vivamus
              condimentum ac quam eget facilisis.
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
              {isMobile ? <></> : <>&nbsp;</>}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat, nulla in sagittis tristique, justo ante porta erat, ac
              tincidunt magna ante eget turpis. Etiam lacus dui, vulputate nec
              tellus ac, aliquam varius tellus. Nam sollicitudin gravida ex, non
              dictum purus vulputate sed. Cras fermentum mauris eu lacinia
              vestibulum.
              <p></p>
              Vestibulum consequat dolor quis facilisis varius. Vivamus
              condimentum ac quam eget facilisis.
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
              {isMobile ? <></> : <>&nbsp;</>}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat, nulla in sagittis tristique, justo ante porta erat, ac
              tincidunt magna ante eget turpis. Etiam lacus dui, vulputate nec
              tellus ac, aliquam varius tellus. Nam sollicitudin gravida ex, non
              dictum purus vulputate sed. Cras fermentum mauris eu lacinia
              vestibulum.
              <p></p>
              Vestibulum consequat dolor quis facilisis varius. Vivamus
              condimentum ac quam eget facilisis.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
