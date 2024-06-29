import { Instagram, YouTube } from '@mui/icons-material'
import {
  Box,
  Container,
  Fade,
  Grid,
  IconButton,
  Slide,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import MarianaBossy from '../../assets/agents/mariana-bossy.jpg'
import TikTokButton from '../../components/buttons/tiktok-button'
import GapGrid from '../../components/gap-grid/gap-grid'
import TikTok from '../../components/icons'
import { useLanguage } from '../../context/language'
import { Colors } from '../../styles/colors'
import { isMobile } from '../../utils/is-mobile'
import { openUrlInNewTab } from '../../utils/open-url-in-new-tab'
import Mapper, { CategoriesMapper1, CategoriesMapper2 } from './mappers'
import {
  StyledGridItemWithImage,
  StyledGridItemWithImageAndHoverEffect,
} from './styles'

const Talent = () => {
  const theme = useTheme()
  const [mobile, setMobile] = useState(isMobile())
  const { currentLanguage } = useLanguage()

  const influencersRef = useRef(null)
  const [influencersTrigger, setInfluencersTrigger] = useState(false)
  const separatorRef = useRef(null)
  const [separatorTrigger, setSeparatorTrigger] = useState(false)
  const categoriesRef1 = useRef(null)
  const [categoriesTrigger1, setCategoriesTrigger1] = useState(false)
  const categoriesRef2 = useRef(null)
  const [categoriesTrigger2, setCategoriesTrigger2] = useState(false)
  const contactUsRef = useRef(null)
  const [contactUsTrigger, setContactUsTrigger] = useState(false)

  useEffect(() => {
    const handler = () => {
      setMobile(isMobile())
    }

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCategoriesTrigger1(true)
    })

    if (categoriesRef1.current) observer.observe(categoriesRef1.current)
    return () => {
      if (categoriesRef1.current) observer.unobserve(categoriesRef1.current)
    }
  }, [categoriesRef1])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCategoriesTrigger2(true)
    })

    if (categoriesRef2.current) observer.observe(categoriesRef2.current)
    return () => {
      if (categoriesRef2.current) observer.unobserve(categoriesRef2.current)
    }
  }, [categoriesRef2])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSeparatorTrigger(true)
    })

    if (separatorRef.current) observer.observe(separatorRef.current)
    return () => {
      if (separatorRef.current) observer.unobserve(separatorRef.current)
    }
  }, [separatorRef])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInfluencersTrigger(true)
    })

    if (influencersRef.current) observer.observe(influencersRef.current)
    return () => {
      if (influencersRef.current) observer.unobserve(influencersRef.current)
    }
  }, [influencersRef])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setContactUsTrigger(true)
    })

    if (contactUsRef.current) observer.observe(contactUsRef.current)
    return () => {
      if (contactUsRef.current) observer.unobserve(contactUsRef.current)
    }
  }, [contactUsRef])

  return (
    <Box pt={10} bgcolor={theme.palette.common.black}>
      <Container maxWidth="xl">
        <GapGrid py={2} pb={10} config={mobile ? 0 : 1}>
          <Box ref={influencersRef}>
            <Slide in={influencersTrigger}>
              <Typography
                px={2}
                py={3}
                variant={mobile ? 'h4' : 'h3'}
                display={mobile ? 'flex' : 'block'}
                justifyContent={mobile ? 'center' : 'normal'}
                sx={{
                  color: Colors.tiktok.pink,
                }}
              >
                {currentLanguage.OurInfluencers}
              </Typography>
            </Slide>
          </Box>
          <Grid px={2} container spacing={2}>
            {Mapper.map(
              ({
                name,
                image100Opacity,
                image70Opacity,
                instagramUrl,
                tiktokUrl,
                youtubeUrl,
              }) => (
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Slide in={influencersTrigger} direction="up">
                    <StyledGridItemWithImageAndHoverEffect
                      url={image70Opacity}
                      urlHover={image100Opacity}
                    >
                      <Box display="flex" flexDirection="column">
                        <Typography
                          fontSize={24}
                          variant="subtitle1"
                          sx={{ textShadow: '0 0 3px #000000' }}
                          className="hover-text"
                        >
                          {name}
                        </Typography>
                        <Box
                          className="social-medias"
                          justifyContent={'center'}
                        >
                          {instagramUrl && (
                            <Box mx={0.5}>
                              <Tooltip
                                title={`${currentLanguage.Visit} Instagram`}
                              >
                                <IconButton
                                  size="small"
                                  onClick={() => openUrlInNewTab(instagramUrl)}
                                >
                                  <Instagram
                                    color="secondary"
                                    fontSize="small"
                                  />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          )}
                          {tiktokUrl && (
                            <Box mx={0.5}>
                              <Tooltip
                                title={`${currentLanguage.Visit} Tiktok`}
                              >
                                <IconButton
                                  size="small"
                                  onClick={() => openUrlInNewTab(tiktokUrl)}
                                >
                                  <TikTok color="secondary" />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          )}
                          {youtubeUrl && (
                            <Box mx={0.5}>
                              <Tooltip
                                title={`${currentLanguage.Visit} Youtube`}
                              >
                                <IconButton
                                  size="small"
                                  onClick={() => openUrlInNewTab(youtubeUrl)}
                                >
                                  <YouTube color="secondary" fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </StyledGridItemWithImageAndHoverEffect>
                  </Slide>
                </Grid>
              )
            )}
          </Grid>
        </GapGrid>
        <GapGrid
          bgcolor={theme.palette.common.white}
          display="flex"
          py={10}
          config={1}
        >
          <Grid
            container
            spacing={mobile ? 0 : 4}
            display="flex"
            alignContent={'center'}
          >
            <Grid
              item
              xs={12}
              lg={6}
              display="column"
              alignContent={'center'}
              justifyContent={'right'}
            >
              <Slide in={separatorTrigger} direction="right">
                <Typography
                  ref={separatorRef}
                  variant={mobile ? 'h4' : 'h3'}
                  textAlign={mobile ? 'center' : 'left'}
                >
                  {currentLanguage.DiverseCommunityAndNiches}
                </Typography>
              </Slide>
              <Slide in={separatorTrigger} direction="left">
                <Typography
                  variant={mobile ? 'h4' : 'h3'}
                  textAlign={mobile ? 'center' : 'left'}
                >
                  {currentLanguage.WeHaveTheIdealCreator}
                </Typography>
              </Slide>
              <Slide in={separatorTrigger} direction="up">
                <Typography
                  variant="body1"
                  fontSize={mobile ? 16 : 18}
                  textAlign={mobile ? 'center' : 'left'}
                >
                  {currentLanguage.TalentSeparatorDescription}
                </Typography>
              </Slide>
            </Grid>
            <Grid item mt={mobile ? 5 : 0} xs={12} lg={6}>
              <Slide in={separatorTrigger} direction="left">
                <Box display="flex" flexDirection={'column'}>
                  <Box display="flex" justifyContent={'center'}>
                    <img
                      style={{
                        borderStyle: 'outset',
                        borderTop: `4px solid ${Colors.tiktok.aqua}`,
                        borderLeft: `4px solid ${Colors.tiktok.aqua}`,
                        borderRight: `4px solid ${Colors.tiktok.pink}`,
                        borderBottom: `4px solid ${Colors.tiktok.pink}`,
                      }}
                      width={'90%'}
                      src={MarianaBossy}
                    />
                  </Box>
                  <Box display="flex" justifyContent={'center'}>
                    <Typography mt={1} variant={mobile ? 'caption' : 'body1'}>
                      Mariana Bossy | {currentLanguage.MarianaBossyDescription1}
                    </Typography>
                  </Box>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </GapGrid>
        <Box ref={categoriesRef1} pt={20}>
          <GapGrid config={1} bgcolor={theme.palette.common.black}>
            <Grid px={2} container spacing={2}>
              {CategoriesMapper1(currentLanguage).map(
                ({ name, image70Opacity }) => (
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Slide in={categoriesTrigger1} direction="left">
                      <StyledGridItemWithImage
                        display="flex"
                        bgcolor={'red'}
                        alignItems={'bottom'}
                        url={image70Opacity}
                      >
                        <Typography
                          variant="subtitle1"
                          fontSize={20}
                          display="flex"
                          justifyContent={'center'}
                          sx={{
                            textShadow: '0 0 3px #000000',
                            background:
                              'linear-gradient(0deg, rgba(0,0,0,0.40242034313725494) 0%, rgba(255,255,255,0) 100%)',
                            width: '100%',
                          }}
                          className="hover-text"
                        >
                          {name}
                        </Typography>
                      </StyledGridItemWithImage>
                    </Slide>
                  </Grid>
                )
              )}
            </Grid>
          </GapGrid>
        </Box>
        <Box ref={contactUsRef}>
          <GapGrid config={mobile ? 0 : 2}>
            <Fade in={contactUsTrigger} timeout={1000}>
              <Box
                py={10}
                bgcolor={theme.palette.common.black}
                display="flex"
                flexDirection={'column'}
              >
                <Typography
                  display="flex"
                  justifyContent={'center'}
                  textAlign={'center'}
                  variant={mobile ? 'h4' : 'h3'}
                  color="secondary"
                >
                  {currentLanguage.TalentContactUsTitle}
                </Typography>
                <Typography
                  mt={4}
                  display="flex"
                  justifyContent={'center'}
                  textAlign={'center'}
                  fontSize={mobile ? 16 : 18}
                  variant="body1"
                  color="secondary"
                >
                  {currentLanguage.TalentContactUsDescription}
                </Typography>
                <Box mt={3} display="flex" justifyContent={'center'}>
                  <TikTokButton>{currentLanguage.ContactUs}</TikTokButton>
                </Box>
              </Box>
            </Fade>
          </GapGrid>
        </Box>
        <Box ref={categoriesRef2} pb={20}>
          <GapGrid config={1} bgcolor={theme.palette.common.black}>
            <Grid px={2} container spacing={2}>
              {CategoriesMapper2(currentLanguage).map(
                ({ name, image70Opacity }) => (
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Slide in={categoriesTrigger2} direction="right">
                      <StyledGridItemWithImage
                        display="flex"
                        bgcolor={'red'}
                        alignItems={'bottom'}
                        url={image70Opacity}
                      >
                        <Typography
                          variant="subtitle1"
                          fontSize={20}
                          display="flex"
                          justifyContent={'center'}
                          sx={{
                            textShadow: '0 0 3px #000000',
                            background:
                              'linear-gradient(0deg, rgba(0,0,0,0.40242034313725494) 0%, rgba(255,255,255,0) 100%)',
                            width: '100%',
                          }}
                          className="hover-text"
                        >
                          {name}
                        </Typography>
                      </StyledGridItemWithImage>
                    </Slide>
                  </Grid>
                )
              )}
            </Grid>
          </GapGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default Talent
