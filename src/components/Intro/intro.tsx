import React from "react";
import emoticonStyled from "@emotion/styled";
import { Box } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Intro = () => {
  const matches = useMediaQuery("(min-width: 689px)");
  return (
    <IntroStyled isLargeView={matches}>
      <Box
        sx={{
          padding: 2,
          flex: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography variant="h5" component="div" sx={{ color: "white" }}>
          About Me.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, px: 1, py: 1 }}>
        <CustomizeCard>
          <CardContent>
            <Typography
              sx={{ marginBottom: 1, fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              GET TO KNOW ABOUT ME.
            </Typography>
            <Box className="Box">
              <Typography variant="subtitle1" component="div">
                I am a 4th years Information Technology student at UHAMKA and
                also a junior frontend developer who would really like to try
                and learn a new thing. I also having the ability to analyze
                software problems which exists and have made a directly related
                projects with client, which is to make a website based on react
                js and also create an api node js based
              </Typography>
            </Box>
          </CardContent>
        </CustomizeCard>
      </Box>
    </IntroStyled>
  );
};

const CustomizeCard = styled(Card)`
  box-shadow: none;
  border-radius: 2px;
`;

interface Styled {
  isLargeView: boolean;
}

const IntroStyled = emoticonStyled.div<Styled>`
  background: var(--mainColor);
  display:flex;
  flex-direction: ${props => (props.isLargeView ? "row" : "column")};
  border-radius: 2px;
  
  .Box{
    border-bottom: 1px solid black;
    padding: 10px 0;
    text-align: justify;
  }

  .Box:last-child{
    border-bottom: none;
  }


`;

export default Intro;
