import React from "react";
import emoticonStyled from "@emotion/styled";
import Box from "@mui/system/Box";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@mui/material";

import SIPESAT from "../../assets/si_pesat_login.png";
import DOCPRO from "../../assets/docpro_login.png";

const ProjectsStyled = emoticonStyled.div`
  padding: 10px 0;

  .card-projects{
    transform: translate(0,0);
    transition: transform 0.5s ease-in-out;
  }
  .card-projects:hover{
    transform: translate(0,-10px);
  }
`;

const projectDetail = [
  {
    title: "Web Developer at Uhamka - Intern",
    webName: "Sistem Pengajuan Surat",
    viewImg: SIPESAT,
    dateWork: "1 Jan 2021 - 1 Sep 2021",
    onClick: () => window.alert("Coming soon, display the app"),
  },
  {
    title: "Web Developer - Freelance",
    webName: "Docpro",
    viewImg: DOCPRO,
    dateWork: "1 Jul 2020 - 1 Sep 2020",
    onClick: () =>
      window.open("https://docpro-app.herokuapp.com/login", "__blank"),
  },
];

const Projects = () => {
  const matches = useMediaQuery("(min-width: 689px)");
  return (
    <ProjectsStyled>
      <Box sx={{ textAlign: "center" }} mb={4}>
        <Typography
          fontWeight="bold"
          component="div"
          variant="h6"
          color="var(--mainColor)"
        >
          PROJECTS.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {projectDetail.map(data => {
          return (
            <Grid item xs={12} md={12} lg={6} key={data.title}>
              <Card
                sx={{
                  display: "flex",
                  height: matches ? "160px" : "auto",
                  cursor: "pointer",
                  flexDirection: matches ? "row" : "column",
                }}
                className="card-projects"
                onClick={data.onClick}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: matches ? "220px" : "auto",
                    height: matches ? "auto" : "180px",
                  }}
                  image={data.viewImg}
                  alt="profile image"
                />
                <Box>
                  <CardContent>
                    <Typography
                      component="div"
                      variant="subtitle1"
                      fontWeight="bold"
                      height="65px"
                    >
                      {data.title}
                    </Typography>
                    <Typography component="div" variant="subtitle2">
                      {data.webName}
                    </Typography>
                    <Typography
                      component="div"
                      variant="subtitle2"
                      sx={{ color: "gray" }}
                    >
                      {data.dateWork}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </ProjectsStyled>
  );
};

export default Projects;
