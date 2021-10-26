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

import Dialog from "../Dialog/dialog";

import { projectDetail, INProjectsData } from "../../data";

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
