import { Box, Fade, Grid, Slide, Typography, Container } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import svg from '../../assets/ilustration1.svg'
import { useLanguage } from '../../context/language'
import { isMobile as isMobileFunction } from '../../utils/is-mobile'
import { smoothScrollTo } from '../../utils/scroll-to-element'
import TikTokButton from '../buttons/tiktok-button.tsx'

const Banner: FC = () => {
  const [isMobile, setIsMobile] = useState(isMobileFunction())
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsMobile(isMobileFunction())
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  return (
    <Container maxWidth={'lg'}>
      <Box id="banner" display="flex" bgcolor={'black'} py={isMobile ? 10 : 25}>
        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
          <Grid container>
            <Grid display={'flex'} alignItems={'center'} item xs={12} md={7}>
              <Box>
                <Slide in={true} direction="down">
                  <Typography
                    color="secondary"
                    variant={isMobile ? 'h2' : 'h2'}
                    textAlign={isMobile ? 'center' : 'left'}
                  >
                    {currentLanguage.Find}
                  </Typography>
                </Slide>
                <Slide in={true} direction="left">
                  <Typography
                    color={'secondary'}
                    variant={isMobile ? 'h3' : 'h2'}
                    textAlign={isMobile ? 'center' : 'left'}
                  >
                    {' '}
                    {currentLanguage.TalentedProfessionals}
                  </Typography>
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
                    <TikTokButton
                      onClick={() =>
                        smoothScrollTo('company-stats', {
                          inline: 'start',
                          block: 'start',
                        })
                      }
                    >
                      {currentLanguage.LearnMore}
                    </TikTokButton>
                  </Box>
                </Fade>
              </Box>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} item xs={12} md={5}>
              <Slide in={true} direction="left">
                <Box
                  width={'100%'}
                  py={isMobile ? 6 : 0}
                  display="flex"
                  justifyContent={'center'}
                >
                  <img width={'100%'} src={svg} />
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Banner
