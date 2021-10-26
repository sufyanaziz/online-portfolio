import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const Navbar: React.FC<{ id: string }> = ({ id }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScroll = () => {
    const elementNavbar = document.querySelector("#navbar-section");
    const elementNavbarOffset = elementNavbar?.getBoundingClientRect().top;

    if (elementNavbarOffset === 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());

    return window.removeEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <Box
      id={id}
      sx={{
        px: isSticky === true ? 3 : 0,
        py: 3,
        display: "flex",
        position: "sticky",
        top: 0,
        color: isSticky === true ? "white" : "var(--mainColor)",
        zIndex: 2,
        background: isSticky === true ? "#056490" : "white",
      }}
    >
      <Typography
        variant="subtitle1"
        component="nav"
        onClick={() => {
          const anchor = document.querySelector("#header-section");
          if (anchor === null) return;
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        style={{ cursor: "pointer" }}
      >
        Home
      </Typography>
      <Typography
        variant="subtitle1"
        component="nav"
        sx={{ px: 4 }}
        onClick={() => {
          const anchor = document.querySelector("#skills-section");
          if (anchor === null) return;
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        style={{ cursor: "pointer" }}
      >
        Skill
      </Typography>
      <Typography
        variant="subtitle1"
        component="nav"
        onClick={() => {
          const anchor = document.querySelector("#projects-section");
          if (anchor === null) return;
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        style={{ cursor: "pointer" }}
      >
        Project
      </Typography>
    </Box>
  );
};

export default Navbar;
