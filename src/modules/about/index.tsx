import { Box, Container, Grid, Slide, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import logo from '../../assets/engage_logo.jpg'
import { isMobile as isMobileFunction } from '../../utils/is-mobile'
import { useLanguage } from '../../context/language.tsx'

const About = () => {
  const { currentCountry } = useLanguage()
  const [isMobile, setIsMobile] = useState(isMobileFunction())

  useEffect(() => {
    const handler = () => setIsMobile(isMobileFunction())
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <Box bgcolor={'black'} display="flex">
      <Container maxWidth="lg" sx={{ paddingTop: '80px' }}>
        <Box py={10} mx={isMobile ? 2 : 0}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Slide in={true}>
                <Typography
                  color="secondary"
                  textAlign={isMobile ? 'center' : 'left'}
                  variant="h4"
                >
                  {currentCountry == 'pt' ? 'A nossa história' : 'Our History'}
                </Typography>
              </Slide>
              <Slide direction="right" in={true}>
                <Typography
                  mt={2}
                  variant="body1"
                  color="secondary"
                  textAlign={isMobile ? 'center' : 'left'}
                >
                  {currentCountry == 'pt' ? (
                    <>
                      A Engage é uma agência de marketing digital, fundada em
                      2024 por Beatriz Albergaria, licenciada em Enfermagem pelo
                      Escola Superior de Enfermagem de Calouste Gulbenkian de
                      Lisboa e com um vasto background na criação de conteúdo e
                      gestão de redes sociais, contando com mais de 25 mil
                      seguidores espalhados por diversas plataformas digitais.
                      <p></p>A Engage oferece apoio a criadores de conteúdo,
                      empresas e influencers, colocando ao seu dispor um leque
                      de profissionais talentosos de diversas áreas de
                      Marketing, Publicidade e Gestão.
                    </>
                  ) : (
                    <>
                      Engage is a digital marketing agency, founded in 2024 by
                      Beatriz Albergaria, who holds a degree in Nursing from the
                      Calouste Gulbenkian School of Nursing in Lisbon and has an
                      extensive background in content creation and social media
                      management, with over 25,000 followers across various
                      digital platforms.
                      <p></p>
                      Engage provides support to content creators, companies,
                      and influencers, offering a team of talented professionals
                      from various fields of Marketing, Advertising, and
                      Management.
                    </>
                  )}
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
  )
}

export default About
