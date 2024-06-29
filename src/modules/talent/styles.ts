import { Box, styled } from '@mui/material'

export const StyledGridItemWithImageAndHoverEffect = styled(Box)<{
  url: string
  urlHover: string
}>(({ url, urlHover, theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.grey[800],
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  color: theme.palette.secondary.main,
  border: '1px solid black',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition:
    'background-color 0.3s ease, color 0.3s ease, background-image 0.3s ease, background-size 0.5s ease',
  '& .social-medias': {
    display: 'none',
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: theme.palette.grey[700],
    backgroundImage: `url(${urlHover})`,
    color: theme.palette.secondary.contrastText,
    // Adding transform to force repaint
    transform: 'scale(1.01)',
    '& .social-medias': {
      display: 'flex',
    },
  },
  '@media (max-width: 600px)': {
    height: '300px',
  },
  '@media (min-width: 600px) and (max-width: 960px)': {
    height: '300px',
  },
  '@media (min-width: 960px) and (max-width: 1280px)': {
    height: '300px',
  },
  '@media (min-width: 1280px)': {
    height: '350px',
  },
}))

export const StyledGridItemWithImage = styled(Box)<{
  url: string
}>(({ url, theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.grey[800],
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.grey[800]}`,
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  transition:
    'background-color 0.3s ease, color 0.3s ease, background-image 0.3s ease, border 0.3s, background-size 0.3s ease',
  '@media (max-width: 600px)': {
    height: '300px',
  },
  '@media (min-width: 600px) and (max-width: 960px)': {
    height: '300px',
  },
  '@media (min-width: 960px) and (max-width: 1280px)': {
    height: '300px',
  },
  '@media (min-width: 1280px)': {
    height: '300px',
  },
}))
