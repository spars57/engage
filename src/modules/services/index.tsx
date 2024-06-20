import { Box } from "@mui/material";
import Services from "../../components/services";

const Service = () => {
  return (
    <Box bgcolor={"black"} sx={{ paddingTop: "80px" }}>
      <Box py={10}>
        <Services />
      </Box>
    </Box>
  );
};

export default Service;
