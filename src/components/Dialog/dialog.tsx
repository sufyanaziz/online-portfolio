import Dialog from "@mui/material/Dialog";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { INProjectsData } from "../../data";
import Box from "@mui/system/Box";

import { useState } from "react";

import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

import { AiFillCloseCircle } from "react-icons/ai";

interface DialogInterface {
  open: boolean;
  handleClose: () => void;
  data: INProjectsData | null;
}

const BootstrapDialog = styled(Dialog)(() => ({
  "& .arrowLeft": {
    position: "absolute",
    left: 12,
    top: "50%",
    fontSize: 30,
  },
  "& .arrowRight": {
    position: "absolute",
    right: 12,
    top: "50%",
    fontSize: 30,
  },
  "& .arrowClose": {
    position: "absolute",
    fontSize: 32,
    top: 8,
    left: 8,
    cursor: "pointer",
  },
}));

const DialogComponent: React.FC<DialogInterface> = ({
  handleClose,
  open,
  data,
}) => {
  const [position, setPosition] = useState(0);
  const matches = useMediaQuery("(min-width: 689px)");
  if (data === null) return null;

  const findEndLeft = position === 0;
  const findEndRight = position + 1 === data.images.length;

  const handleCloseDialog = () => {
    handleClose();
    setPosition(0);
  };

  return (
    <BootstrapDialog
      open={open}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="xl"
    >
      <Card sx={{ display: "flex", flexDirection: matches ? "row" : "column" }}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <AiFillCloseCircle
            className="arrowClose"
            onClick={handleCloseDialog}
          />
          <BsFillArrowLeftSquareFill
            className="arrowLeft"
            onClick={() =>
              findEndLeft ? "" : setPosition(prevState => prevState - 1)
            }
            style={{
              color: findEndLeft ? "gray" : "unset",
              cursor: findEndLeft ? "unset" : "pointer",
            }}
          />
          <CardMedia
            component="img"
            sx={{
              width: matches ? 780 : "100%",
              height: matches ? "100%" : "220px",
            }}
            image={data.images[position]}
            alt="profile image"
          />
          <BsFillArrowRightSquareFill
            className="arrowRight"
            onClick={() =>
              findEndRight ? "" : setPosition(prevState => prevState + 1)
            }
            style={{
              color: findEndRight ? "gray" : "unset",
              cursor: findEndRight ? "unset" : "pointer",
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="subtitle1" component="div" fontWeight="bold">
            {data.title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {data.webName}
          </Typography>
          <Typography variant="caption" component="div" mt={1}>
            {data.dateWork}
          </Typography>
          <Typography
            mt={2}
            variant="subtitle2"
            component="div"
            fontWeight="bold"
            sx={{ textDecoration: "underline" }}
            mb={1}
          >
            What i'm Doing
          </Typography>
          <Typography
            variant="subtitle2"
            whiteSpace="pre-wrap"
            component="div"
            mb={1}
          >{`${data.desc}`}</Typography>
          {data.link !== "" && (
            <>
              <Typography variant="caption" component="span">
                Link Prev:{" "}
              </Typography>
              <Typography
                component="a"
                variant="caption"
                href={data.link}
                target="__blank"
              >
                {data.link}
              </Typography>
            </>
          )}
          {data.linkGit !== "" && (
            <>
              <br />
              <Typography variant="caption" component="span">
                Link Git:{" "}
              </Typography>
              <Typography
                component="a"
                variant="caption"
                href={data.link}
                target="__blank"
              >
                {data.linkGit}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </BootstrapDialog>
  );
};

export default DialogComponent;
