import {
  Box,
  Container,
  Fade,
  Grid,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { isMobile as isMobileFunction } from "../../utils/is-mobile";
import { GradientTypography } from "../gradient-typography";

const Companies: FC = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(isMobileFunction());
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsMobile(isMobileFunction());
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
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
      py={isMobile ? 10 : 30}
      sx={{
        backgroundImage: `linear-gradient(to top,${theme.palette.common.black},${theme.palette.grey[900]})`,
      }}
    >
      <Slide in={trigger} direction="up">
        <Box
          mx={2}
          display={isMobile ? "block" : "flex"}
          justifyContent={"center"}
        >
          <Typography
            textAlign={isMobile ? "center" : "left"}
            variant={isMobile ? "h4" : "h4"}
            color="secondary"
          >
            Os nosso profissionais
          </Typography>
          {isMobile ? "" : <>&nbsp;</>}
          <GradientTypography
            textAlign={isMobile ? "center" : "left"}
            variant={isMobile ? "h6" : "h4"}
          >
            ajudam as maiores marcas do mundo
          </GradientTypography>
        </Box>
      </Slide>

      <Box mt={5}>
        <Fade in={trigger}>
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
        </Fade>
      </Box>
    </Box>
  );
};

export default Companies;
