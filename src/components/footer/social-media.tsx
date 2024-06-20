import { Facebook, Instagram, LinkedIn, X, YouTube } from "@mui/icons-material";
import { Box, IconButton, styled } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: "border 0.5s, background-color 0.5s",
  border: `1px solid ${theme.palette.grey[600]}`,
  "&:hover": {
    border: `1px solid ${theme.palette.grey[800]}`,
    backgroundColor: theme.palette.grey[800],
  },
}));

const SocialMediaFooterComponent = () => {
  return (
    <Box display="flex">
      <Box mx={1}>
        <StyledIconButton>
          <Instagram fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton>
          <LinkedIn fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton>
          <Facebook fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton>
          <YouTube fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton>
          <X fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
    </Box>
  );
};

export default SocialMediaFooterComponent;
