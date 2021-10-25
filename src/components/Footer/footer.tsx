import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const dataIconFooter = [
  {
    name: "ig",
    icon: FaInstagram,
    className: "icon-footer",
    link: "https://www.instagram.com/ahmadsufyan_/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    className: "icon-footer",
    link: "https://twitter.com/sufyanAziz98",
  },
  {
    name: "Facebook",
    icon: FaFacebookSquare,
    className: "icon-footer",
    link: "https://www.facebook.com/ahmad.s.aziz.1/",
  },
  {
    name: "github",
    icon: FaGithub,
    className: "icon-footer",
    link: "https://github.com/sufyanaziz",
  },
  {
    name: "linkedIn",
    icon: FaLinkedin,
    className: "icon-footer",
    link: "https://www.linkedin.com/in/achmad-sufyan-aziz-b63603185/",
  },
];

const Footer: React.FC<{ matches: boolean }> = ({ matches }) => {
  return (
    <Box
      sx={{
        pt: 5,
        pb: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: matches ? "row" : "column",
      }}
    >
      <Box
        sx={{
          marginRight: matches ? "auto" : 0,
          color: "var(--mainColor)",
          mb: matches ? 0 : 2,
        }}
      >
        {dataIconFooter.map(data => {
          const Icon = data.icon;
          return (
            <Icon
              key={data.name}
              className={data.className}
              onClick={() => window.open(data.link, "__blank")}
            />
          );
        })}
      </Box>
      <Typography
        variant="subtitle1"
        component="div"
        style={{ marginLeft: 2, color: "var(--mainColor)" }}
      >
        COPYRIGHT {new Date().getFullYear()} | Achmad Sufyan Aziz
      </Typography>
    </Box>
  );
};

export default Footer;
