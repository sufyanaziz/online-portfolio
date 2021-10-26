import emoticonStyled from "@emotion/styled";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { BsDownload } from "react-icons/bs";

const Intro: React.FC<{ id: string }> = ({ id }) => {
  const matches = useMediaQuery("(min-width: 689px)");
  return (
    <IntroStyled id={id} isLargeView={matches}>
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          ABOUT ME.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, px: 1, py: 1 }}>
        <Box className="Box">
          <Typography variant="subtitle1" component="div" textAlign="center">
            I am a 4th years Information Technology student at UHAMKA and also a
            junior frontend developer who would really like to try and learn a
            new thing. I also having the ability to analyze software problems
            which exists and have made a directly related projects with client,
            which is to make a website based on react js and also create an api
            node js based
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <BsDownload style={{ fontSize: 20 }} />
        <Typography
          variant="subtitle1"
          ml="10px"
          component="a"
          download
          href="/Resume-AchmadSufyanAziz.pdf"
          style={{ color: "unset" }}
        >
          My Resume
        </Typography>
      </Box>
    </IntroStyled>
  );
};

interface Styled {
  isLargeView: boolean;
}

const IntroStyled = emoticonStyled.div<Styled>`
  background: var(--mainColor);
  border-radius: 2px;
  padding: ${props => (props.isLargeView ? "2rem 8rem" : "1rem")};
  color:white;
 
  
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
