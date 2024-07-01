import { Box, Container, Grid, styled, Typography } from '@mui/material'
import { useLanguage } from '../../context/language.tsx'
import management from '../../assets/background/management.png'
import consultancy from '../../assets/background/consultancy.png'
import influencers from '../../assets/background/influencers.png'
import events from '../../assets/background/events.png'
import design from '../../assets/background/design.png'
import websites from '../../assets/background/websites.png'

const ServiceBox = styled(Box)<{ url?: string }>(({ theme, url }) => ({
  position: 'relative',
  border: `3px solid ${theme.palette.common.black}`,
  height: '300px',
  background: `url(${url}) no-repeat center center`,
  backgroundSize: 'auto 100%',
  backgroundColor: theme.palette.common.black,
  overflow: 'hidden',
  variants: '',

  '.title': {
    transition: 'color 0.3s',
    color: theme.palette.common.white,
    position: 'relative',
    zIndex: 2, // Ensure title is above the overlay
  },

  '.description': {
    display: 'none',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 1,
  },

  '&:hover::before': {
    opacity: 1,
  },

  '&:hover': {
    cursor: 'pointer',
    '.title': {
      color: theme.palette.common.black,
    },
    '.description': {
      display: 'block',
    },
  },

  '@media (max-width: 600px)': {
    height: '300px',
    backgroundSize: '100% 100%',
  },
  '@media (min-width: 600px) and (max-width: 960px)': {
    height: '300px',
    backgroundSize: '100% 100%',
  },
  '@media (min-width: 960px) and (max-width: 1280px)': {
    height: '300px',
    backgroundSize: '100% 100%',
  },
  '@media (min-width: 1280px)': {
    height: '350px',
  },
}))

const descriptionsMapperPT = {
  SocialMediaManagement:
    'Criação e otimização de perfis, gestão de interações, plano estratégico, criação de conteúdos, publicação, monitorização de desempenho, crescimento da audiência, campanhas publicitárias, análise de concorrência e adequação da estratégia.',
  SocialMediaConsultancy:
    'Reuniões semanais, criação de guiões, apoio criativo, ensino de edição, brainstorming, feedback constante, estratégia e análise de resultados.',
  InfluencersMarketing:
    'Identificação e avaliação de influenciadores, negociação de parcerias, desenvolvimento de campanhas, criação de conteúdos colaborativos, gestão de envio de produtos, monitorização de publicações e análise de impacto..',

  EventsManagement:
    'Definição de objetivos, planeamento e orçamento, coordenação de fornecedores, logística, promoção e marketing, e coordenação da equipa no dia do evento.',
  DesignServices:
    'Identidade de marca, logotipos, materiais de estacionário e desenvolvimento criativo e impressão de materiais.',

  WebsiteDevelopment: 'Criação de Websites.',
}

const descriptionsMapperUK = {
  SocialMediaManagement:
    'Profile creation and optimization, interaction management, strategic planning, content creation, publishing, performance monitoring, audience growth, advertising campaigns, competitor analysis, and strategy adaptation.',
  SocialMediaConsultancy:
    'Weekly meetings, script creation, creative support, editing teaching, brainstorming, constant feedback, strategy, and results analysis.',
  InfluencersMarketing:
    'Identification and evaluation of influencers, partnership negotiation, campaign development, collaborative content creation, product shipment management, post monitoring, and impact analysis.',
  EventsManagement:
    'Objective setting, planning and budgeting, supplier coordination, logistics, promotion and marketing, and team coordination on the event day.',
  DesignServices:
    'Brand identity, logos, stationery materials, and creative development and printing of materials.',
  WebsiteDevelopment: 'Website creation.',
}

const Index = () => {
  const { currentLanguage, currentCountry } = useLanguage()

  const mapper = [
    {
      url: management,
      title: currentLanguage.SocialMediaManagement,
      description:
        currentCountry == 'pt'
          ? descriptionsMapperPT.SocialMediaManagement
          : descriptionsMapperUK.SocialMediaManagement,
    },
    {
      url: consultancy,
      title: currentLanguage.SocialMediaConsultancy,
      description:
        currentCountry == 'pt'
          ? descriptionsMapperPT.SocialMediaConsultancy
          : descriptionsMapperUK.SocialMediaConsultancy,
    },
    {
      url: influencers,
      title: currentLanguage.InfluencersMarketing,
      description:
        currentCountry == 'pt'
          ? descriptionsMapperPT.InfluencersMarketing
          : descriptionsMapperUK.InfluencersMarketing,
    },
    {
      url: events,
      title: currentLanguage.EventsManagement,
      description:
        currentCountry == 'pt'
          ? descriptionsMapperPT.EventsManagement
          : descriptionsMapperUK.EventsManagement,
    },
    {
      url: design,
      title: currentLanguage.DesignServices,
      description:
        currentCountry == 'pt'
          ? descriptionsMapperPT.DesignServices
          : descriptionsMapperUK.DesignServices,
    },
    {
      url: websites,
      title: currentLanguage.WebsiteDevelopment,
      description:
        currentCountry == 'pt'
          ? descriptionsMapperPT.WebsiteDevelopment
          : descriptionsMapperUK.WebsiteDevelopment,
    },
  ]

  return (
    <Box bgcolor={'white'} py={5}>
      <Container maxWidth={'lg'}>
        <Typography variant={'body1'} fontSize={32} py={1}>
          {currentLanguage.OurServices}
        </Typography>

        <Grid container spacing={2}>
          {mapper.map(({ title, description, url }) => (
            <Grid item xs={12} md={6} lg={4}>
              <ServiceBox url={url}>
                <Box px={2} pt={2}>
                  <Typography variant={'h5'} fontSize={28} className={'title'}>
                    {title}
                  </Typography>
                  <Typography
                    mt={2}
                    variant={'body1'}
                    className={'title description'}
                  >
                    {description}
                  </Typography>
                </Box>
              </ServiceBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Index
