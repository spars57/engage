import { Box, styled } from '@mui/material'
import { FC } from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,

  '.logos': {
    overflow: 'hidden',
    padding: '10px 0',
    whiteSpace: 'nowrap',
  },

  '@keyframes slide': {
    from: {
      transform: 'translateX(0)',
    },
    to: {
      transform: 'translateX(-100%)',
    },
  },
  '.logos-slide': {
    display: 'inline-block',
    animation: '45s slide infinite linear',
  },
  '.logos-slide img': {
    height: '30px',
    margin: '0 40px',
  },
}))

const Images: FC = () => {
  return (
    <Box className={'logos-slide'}>
      <img src={'https://cdn.worldvectorlogo.com/logos/facebook-5.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/microsoft-6.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/netflix-3.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/uber-2.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/logo-amazon.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/tesla-9.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/samsung-8.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/fiverr-2.svg'} />
      <img
        src={'https://cdn.worldvectorlogo.com/logos/lamborghini-logo-1.svg'}
      />
      <img src={'https://cdn.worldvectorlogo.com/logos/dior-2.svg'} />
      <img src={'https://cdn.worldvectorlogo.com/logos/youtube-6.svg'} />
    </Box>
  )
}

const LogoCarousel = () => {
  return (
    <StyledBox py={5}>
      <Box className={'logos'}>
        <Images />
        <Images />
      </Box>
    </StyledBox>
  )
}

export default LogoCarousel
