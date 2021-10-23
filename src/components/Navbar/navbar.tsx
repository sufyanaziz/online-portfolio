import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <Box sx={{ px: 0, py: 3, display: "flex", color: "var(--mainColor)" }}>
      <Typography variant="subtitle1" component="nav">
        Home
      </Typography>
      <Typography variant="subtitle1" component="nav" sx={{ px: 4 }}>
        Skill
      </Typography>
      <Typography variant="subtitle1" component="nav">
        Project
      </Typography>
    </Box>
  );
};

export default Navbar;
