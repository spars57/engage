import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { GradientTypography } from "../gradient-typography";

const Companies: FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Typography variant="h4" color="secondary">
        Os nosso profissionais
      </Typography>
      &nbsp;
      <GradientTypography variant="h4">
        ajudam as maiores marcas do mundo
      </GradientTypography>
    </Box>
  );
};

export default Companies;
