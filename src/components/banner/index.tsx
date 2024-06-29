import { Box, Fade, Grid, Slide, Typography, useTheme } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { GradientButton } from '../gradient-button'
import { GradientTypography } from '../gradient-typography'

import svg from '../../assets/ilustration1.svg'
import { useLanguage } from '../../context/language'
import { isMobile as isMobileFunction } from '../../utils/is-mobile'
import { smoothScrollTo } from '../../utils/scroll-to-element'

const Banner: FC = () => {
  const theme = useTheme()
  const [isMobile, setIsMobile] = useState(isMobileFunction())
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsMobile(isMobileFunction())
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

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
                variant={isMobile ? 'h4' : 'h2'}
                textAlign={isMobile ? 'center' : 'left'}
              >
                {currentLanguage.Find}
              </Typography>
            </Slide>
            <Slide in={true} direction="left">
              <GradientTypography
                variant={isMobile ? 'h4' : 'h2'}
                textAlign={isMobile ? 'center' : 'left'}
              >
                {' '}
                {currentLanguage.TalentedProfessionals}
              </GradientTypography>
            </Slide>
            <Slide direction="up" in={true}>
              <Box mt={3} width={isMobile ? '100%' : '75%'}>
                <Typography
                  variant="body1"
                  color="secondary"
                  textAlign={isMobile ? 'center' : 'left'}
                >
                  {currentLanguage.HomeBannerDescription}
                </Typography>
              </Box>
            </Slide>
            <Fade in={true}>
              <Box
                display="flex"
                justifyContent={isMobile ? 'center' : 'left'}
                py={3}
              >
                <GradientButton
                  onClick={() =>
                    smoothScrollTo('services', {
                      inline: 'start',
                      block: 'start',
                    })
                  }
                  variant="contained"
                >
                  {currentLanguage.LearnMore}
                </GradientButton>
              </Box>
            </Fade>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Slide in={true} direction="left">
            <Box py={isMobile ? 6 : 0} display="flex" justifyContent={'center'}>
              <img width={'100%'} src={svg} />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Banner
