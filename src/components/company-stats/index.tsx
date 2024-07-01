import { Box, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'
import { isMobile as isMobileFunction } from '../../utils/is-mobile'
import { useLanguage } from '../../context/language.tsx'
import TikTokButton from '../buttons/tiktok-button.tsx'
import { Colors } from '../../styles/colors.ts'

const CompanyStats: FC = () => {
  const { currentCountry, currentLanguage } = useLanguage()
  const [isMobile, setIsMobile] = useState(isMobileFunction())

  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([]) => {})

    if (elementRef.current) observer.observe(elementRef.current)
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current)
    }
  }, [elementRef])

  useEffect(() => {
    const handler = () => setIsMobile(isMobileFunction())
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const marketingMapper = [
    {
      title: '100M+',
      description:
        currentCountry == 'pt' ? 'Contas Alancaçadas' : 'Engaged Accounts',
      color: Colors.tiktok.pink,
    },
    {
      title: '500%',
      description:
        currentCountry == 'pt' ? 'Crescimento ROAS' : 'Avg ROAS increase',
      color: Colors.instagram.orange,
    },
    {
      title: '16',
      description: currentCountry == 'pt' ? 'Prémios' : 'Awards',
      color: Colors.instagram.orange,
    },
    {
      title: '-34%',
      description: currentCountry == 'pt' ? 'Redução CAC' : 'Avg CAC reduction',
      color: Colors.tiktok.pink,
    },
  ]

  return (
    <Box
      ref={elementRef}
      id="services"
      bgcolor={'white'}
      pt={isMobile ? 0 : 10}
      pb={isMobile ? 10 : 10}
    >
      <Container maxWidth={'lg'}>
        <Grid
          spacing={3}
          container
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Grid item xs={12} md={6}>
            <Typography variant={'button'}>
              {currentLanguage.Marketing}
            </Typography>
            <Typography mt={1} variant={isMobile ? 'h4' : 'h3'}>
              {currentCountry == 'pt' ? (
                <>
                  Existe o Marketing tradicional, depois existe
                  <br /> a Engage.
                </>
              ) : (
                'There’s Traditional Social Marketing. Then There’s Engage'
              )}
            </Typography>
            <Typography mt={1} variant={'body1'}>
              {currentCountry == 'pt'
                ? 'Dar o primeiro passo nas redes sociais não precisa de ser difícil.'
                : 'Moving towards a social-first approach doesn’t have to be hard.'}
            </Typography>
            <Box mt={1}>
              <TikTokButton variant={'white'}>
                {currentLanguage.LearnMore}
              </TikTokButton>
            </Box>
          </Grid>
          <Grid item mt={isMobile ? 5 : 0} xs={12} md={6}>
            <Grid container spacing={4}>
              {marketingMapper.map(({ title, description, color }) => (
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant={isMobile ? 'h4' : 'h3'} py={0.5}>
                      {title}
                    </Typography>
                    <Typography variant={isMobile ? 'h5' : 'h4'}>
                      {description}
                    </Typography>
                    <LinearProgress
                      variant={'determinate'}
                      value={100}
                      color={'inherit'}
                      sx={{ color, my: 1 }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CompanyStats
