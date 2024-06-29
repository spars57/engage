import { Message } from '@mui/icons-material'
import {
  Avatar,
  Box,
  IconButton,
  Popover,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { useLanguage } from '../../context/language'
import { Colors } from '../../styles/colors'
import TikTokButton from '../buttons/tiktok-button'
import SmallLogoWhite from '../logo/small-logo-white'

const StyledIconButton = styled(IconButton)({
  backgroundColor: Colors.tiktok.pink,
  opacity: 1,
  transition: 'scale 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: Colors.tiktok.pink,
  },
})

const ContactUsFixed = () => {
  const theme = useTheme()
  const { currentLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null)

  const onOpen: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setOpen(true)
    setAnchorEl(e?.currentTarget)
  }
  const onClose = () => setOpen(false)

  return (
    <Box>
      <Popover
        disableAutoFocus={true}
        autoFocus={false}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        sx={{
          padding: 20,
          marginBottom: '200px',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box
          p={1}
          pb={5}
          width={400}
          sx={{
            backgroundColor: theme.palette.common.black,
          }}
        >
          <Box
            display="flex"
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <SmallLogoWhite size={60} />
            <Avatar
              sx={{ border: `1px solid ${Colors.tiktok.pink}` }}
              src={
                'https://yt3.googleusercontent.com/yEL7TT5517cvwtsIq9NJO2RpeqcORQ3UvXxLck3TX_DvoRHcIdb6qWzp5vQBXZq1U2UpAODKHQ=s900-c-k-c0x00ffffff-no-rj'
              }
            />
          </Box>
          <Box p={2}>
            <Typography
              display="flex"
              variant="h5"
              justifyContent={'center'}
              color="secondary"
            >
              {currentLanguage.ContactUs}
            </Typography>
            <Typography
              mt={2}
              display="flex"
              variant="body1"
              justifyContent={'center'}
              color="secondary"
            >
              Envie-nos um email com as suas questões, se fizer sentido
              agendaremos uma reunião consigo para lhe apresentar a Engage.
            </Typography>
          </Box>

          <Box display="flex" justifyContent={'center'}>
            <TikTokButton>
              <a
                href={`mailto:${import.meta.env.VITE_OWNER_EMAIL}`}
                className="children"
              >
                {currentLanguage.SendUsAnEmail}
              </a>
            </TikTokButton>
          </Box>
        </Box>
      </Popover>
      <Box
        position="fixed"
        display="flex"
        justifyContent="right"
        bottom={30}
        right={open ? 41 : 30}
        width="100%"
      >
        <StyledIconButton onClick={onOpen}>
          <Message sx={{ fill: theme.palette.common.white }} />
        </StyledIconButton>
      </Box>
    </Box>
  )
}

export default ContactUsFixed
