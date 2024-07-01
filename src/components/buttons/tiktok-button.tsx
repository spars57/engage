import { ButtonBase, styled, Theme } from '@mui/material'
import { Colors } from '../../styles/colors'

type Variant = 'white' | 'black'

const getBackgroundColor = (variant: Variant, theme: Theme) =>
  variant === 'white' ? Colors.tiktok.pink : theme.palette.common.black

const getHoverColor = (variant: Variant, theme: Theme) =>
  variant === 'white' ? theme.palette.common.black : Colors.tiktok.pink

const getHoverBorder = (variant: Variant, theme: Theme) =>
  variant === 'white' ? Colors.tiktok.pink : theme.palette.common.white

const TikTokButton = styled(ButtonBase)<{ variant?: Variant }>(
  ({ theme, variant = 'black' }) => ({
    border: `2px solid ${Colors.tiktok.pink}`,
    borderRadius: 0,
    padding: 12,
    color: theme.palette.secondary.main,
    fontFamily: 'league-spartan-medium',
    letterSpacing: 1.2,
    fontWeight: 'bold',
    backgroundColor: getBackgroundColor(variant, theme),
    transition: 'background-color 0.3s, color 0.3s, border 0.3s',

    '&: hover': {
      backgroundColor: theme.palette.common.white,
      color: getHoverColor(variant, theme),
      border: `2px solid ${getHoverBorder(variant, theme)}`,
      '&:hover .children': {
        textDecoration: 'none',
        color: theme.palette.common.black,
      },
    },

    '.children': {
      textDecoration: 'none',
      color: theme.palette.common.white,
    },
  })
)

export default TikTokButton
