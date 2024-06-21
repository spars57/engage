import { Facebook, Instagram, LinkedIn, X, YouTube } from "@mui/icons-material";
import { Box, IconButton, styled } from "@mui/material";
import { openUrlInNewTab } from "../../utils/open-url-in-new-tab";

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
        <StyledIconButton
          onClick={() =>
            openUrlInNewTab("https://www.instagram.com/engageagency.pt/")
          }
        >
          <Instagram fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton
          onClick={() =>
            openUrlInNewTab(
              "https://www.linkedin.com/company/engage-digital-agency/"
            )
          }
        >
          <LinkedIn fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton
          onClick={() =>
            openUrlInNewTab("https://www.instagram.com/engageagency.pt/")
          }
        >
          <Facebook fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton
          onClick={() =>
            openUrlInNewTab("https://www.instagram.com/engageagency.pt/")
          }
        >
          <YouTube fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
      <Box mx={1}>
        <StyledIconButton
          onClick={() =>
            openUrlInNewTab("https://www.instagram.com/engageagency.pt/")
          }
        >
          <X fontSize="small" color="secondary" />
        </StyledIconButton>
      </Box>
    </Box>
  );
};

export default SocialMediaFooterComponent;
