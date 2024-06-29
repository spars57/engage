import { Button, styled } from '@mui/material'
import { Colors } from '../../styles/colors'

const TikTokButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${Colors.tiktok.pink}`,
  borderRadius: 0,
  color: theme.palette.secondary.main,
  '&: hover': {
    backgroundColor: theme.palette.secondary.main,
    color: Colors.tiktok.pink,
    border: `2px solid ${theme.palette.common.white}`,
  },
}))

export default TikTokButton
