import { Box, Container, Typography } from '@mui/material'
import TikTokButton from '../buttons/tiktok-button.tsx'
import { useLanguage } from '../../context/language.tsx'

const TalentHomeSection = () => {
  const { currentCountry } = useLanguage()
  return (
    <Box bgcolor={'black'} py={10}>
      <Container maxWidth={'lg'}>
        <Typography
          fontFamily={'league-spartan-bold'}
          textAlign={'center'}
          variant={'h4'}
          color={'secondary'}
        >
          {currentCountry == 'pt'
            ? 'Cresça o seu negócio com a Engage'
            : 'Grow your business with Engage'}
        </Typography>
        <Typography
          py={5}
          textAlign={'center'}
          variant={'h6'}
          color={'secondary'}
        >
          {currentCountry == 'pt'
            ? 'Expanda o seu negócio e ultrapasse os seus recordes'
            : 'Expand you business and break your records'}
        </Typography>
        <Box display={'flex'} justifyContent={'center'}>
          <TikTokButton>
            {' '}
            {currentCountry == 'pt' ? 'Entre em contacto' : 'Get in Touch'}
          </TikTokButton>
        </Box>
      </Container>
    </Box>
  )
}

export default TalentHomeSection
