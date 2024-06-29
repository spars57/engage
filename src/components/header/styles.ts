import { AppBar, styled } from '@mui/material'

export const HeaderAppBar = styled(AppBar)<{ triggerOpacity: boolean }>(
  ({ triggerOpacity }) => ({
    transition: 'background-color 0.5s, color 0.5s',
    backgroundColor: triggerOpacity ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,1)',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: triggerOpacity ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,1)',
    },
  })
)
