import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const Quote = () => {
  const matches = useMediaQuery("(min-width: 689px)");
  return (
    <Box
      mb={2}
      sx={{
        background: "var(--mainColor)",
        color: "white",
        borderRadius: "2px",
      }}
      py={10}
      px={matches ? 14 : 4}
      textAlign="center"
    >
      <Typography
        component="div"
        variant="h5"
        mb={3}
        style={{ fontWeight: "bold" }}
      >
        Favorite Quote.
      </Typography>
      <Typography component="div" variant="subtitle2">
        Your time is limited, so don't waste it living someone else's life.
        Don't be trapped by dogma – which is living with the results of other
        people's thinking.
      </Typography>
    </Box>
  );
};

export default Quote;
