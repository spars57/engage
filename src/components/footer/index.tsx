import {
  Box,
  Container,
  Divider,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '../../config/routes'
import { useLanguage } from '../../context/language'
import { Logo } from '../logo'
import SocialMediaFooterComponent from './social-media'

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  transition: 'color 0.5s',
  '&:hover': {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}))

const Footer: FC = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { currentLanguage } = useLanguage()
  return (
    <Box display="flex" bgcolor="black" flexDirection={'column'}>
      <Container maxWidth="lg">
        <Box
          py={2}
          display="flex"
          alignItems={'center'}
          width="100%"
          justifyContent="space-between"
        >
          <Logo />
          <SocialMediaFooterComponent />
        </Box>
      </Container>

      <Box>
        <Divider sx={{ backgroundColor: theme.palette.grey[800] }} />
      </Box>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems={'center'}
          justifyContent={'space-between'}
          py={2}
        >
          <Typography variant="caption" color="secondary">
            Copyright © 2024 ENGAGE
          </Typography>
          <Box display="flex" alignItems={'center'}>
            <Box mx={2} onClick={() => navigate(RoutePath.Terms)}>
              <StyledTypography variant="caption" color="secondary">
                {currentLanguage.TermsAndConditions}
              </StyledTypography>
            </Box>
            <Box mx={2} onClick={() => navigate(RoutePath.Policy)}>
              <StyledTypography variant="caption" color="secondary">
                {currentLanguage.PrivacyPolitics}
              </StyledTypography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
