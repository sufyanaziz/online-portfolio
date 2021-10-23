import emoticonStyled from "@emotion/styled";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Box from "@mui/system/Box";

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const SkillStyled = emoticonStyled.div`
  .card-skills{
    transform: translate(0,0);
    transition: transform 0.5s ease-in-out;
  }
  .card-skills:hover{
    transform: translate(0,-10px);
  }
`;

const SkillsData = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E54D26",
    docLink: "https://html.com/",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#2196F3",
    docLink: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    color: "#F7DF1E",
    docLink: "https://www.javascript.com/",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    color: "#007acc",
    docLink: "https://www.typescriptlang.org/",
  },
  {
    name: "React.js",
    icon: FaReact,
    color: "#53C1DE",
    docLink: "https://reactjs.org/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#8CC84B",
    docLink: "https://nodejs.org/en/",
  },
];

const Skills = () => {
  return (
    <SkillStyled>
      <Box sx={{ py: 4 }}>
        <Typography
          sx={{ textAlign: "center", marginBottom: 4, fontWeight: "bold" }}
          component="div"
          variant="h5"
        >
          SKILLS.
        </Typography>
        <Grid container spacing={2}>
          {SkillsData.map(data => {
            const Icon = data.icon;
            return (
              <Grid
                key={data.name}
                item
                xs={6}
                md={2}
                onClick={() => window.open(data.docLink, "__blank")}
              >
                <Card
                  className="card-skills"
                  sx={{ textAlign: "center", cursor: "pointer" }}
                >
                  <CardContent>
                    <Icon
                      style={{
                        fontSize: 40,
                        color: data.color,
                        marginBottom: 3,
                      }}
                    />
                    <Typography
                      component="div"
                      variant="subtitle1"
                      sx={{ color: "black" }}
                    >
                      {data.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </SkillStyled>
  );
};

export default Skills;
