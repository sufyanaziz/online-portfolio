import React, { useState } from "react";
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

import SIPESAT_LOGIN from "../../assets/si_pesat_login.png";
import SIPESAT_DASHBOARD from "../../assets/dashboard.png";
import SIPESAT_FORM from "../../assets/form.png";
import DOCPRO from "../../assets/docpro_login.png";

import Dialog from "../Dialog/dialog";

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
    viewImg: SIPESAT_LOGIN,
    dateWork: "1 Jan 2021 - 1 Sep 2021",
    onClick: (setOpenDialog: any) => setOpenDialog(true),
    images: [SIPESAT_LOGIN, SIPESAT_DASHBOARD, SIPESAT_FORM],
    desc: "Create aplication for sistem pengajuan surat with React.js and Node.js",
    link: "",
  },
  {
    title: "Web Developer - Freelance",
    webName: "Docpro",
    viewImg: DOCPRO,
    dateWork: "1 Jul 2020 - 1 Sep 2020",
    onClick: (setOpenDialog: any) => setOpenDialog(true),
    images: [DOCPRO],
    desc: "Frontend - React.js\n-Maintance Web Apointment docpro\n- Create a few features on the website docpro\nBackend - Node.js\n- Create API Web Apointmen docpro",
    link: "https://docpro-app.herokuapp.com/login",
  },
];

export interface INProjectsData {
  title: string;
  webName: string;
  viewImg: string;
  dateWork: string;
  onClick: (setOpenDialog: any) => any;
  images: string[];
  desc: string;
  link: string;
}

const Projects = () => {
  const matches = useMediaQuery("(min-width: 689px)");

  const [openDialog, setOpenDialog] = useState(false);
  const [projectsData, setProjectsData] = useState<INProjectsData | null>(null);

  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        handleClose={() => {
          setOpenDialog(false);
          setProjectsData(null);
        }}
        data={projectsData}
      />
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
                  onClick={() => {
                    data.onClick(setOpenDialog);
                    setProjectsData(data);
                  }}
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
    </React.Fragment>
  );
};

export default Projects;
