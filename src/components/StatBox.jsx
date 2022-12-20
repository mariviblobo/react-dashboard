import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon} 
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h7" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h7"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
          mr="5px"
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
