import React from "react";

import styledEmoticon from "@emotion/styled";
import Card from "@mui/material/Card";

import {
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdCake } from "react-icons/md";

interface HeaderProps {
  name: string;
  image: {
    profile: string;
  };
  title: string;
  id: string;
}

const Header: React.FC<HeaderProps> = ({ name, image, title, id }) => {
  const matches = useMediaQuery("(min-width: 689px)");

  return (
    <HeaderStyled id={id}>
      <CustomizeCard
        sx={{ display: "flex", flexDirection: matches ? "row" : "column" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 180, borderRadius: 2 }}
          image={image.profile}
          alt="profile image"
        />
        <Box sx={{ display: "flex" }}>
          <CardContent sx={{ padding: matches ? 2 : 0 }}>
            <Typography
              component="div"
              variant="subtitle2"
              sx={{ fontSize: 30 }}
            >
              Hi I'm
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: 30, fontWeight: "bold", marginTop: "-10px" }}
            >
              {name}
            </Typography>
            <Typography component="div" variant="subtitle2">
              {title}
            </Typography>
            <Box
              mt={3}
              sx={{
                display: "flex",
                flexDirection: matches ? "row" : "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <MdCake />
                <Typography variant="subtitle2" ml="5px">
                  9 November 1998
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <HiMail />
                <Typography variant="subtitle2" ml="5px">
                  achmadsufyan98@gmail.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "12px",
                }}
              >
                <BsTelephoneFill />
                <Typography variant="subtitle2" ml="5px">
                  085211181046
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CustomizeCard>
    </HeaderStyled>
  );
};

const CustomizeCard = styled(Card)`
  box-shadow: none;
`;

const HeaderStyled = styledEmoticon.div``;

export default Header;
