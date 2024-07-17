import { Box, Typography } from "@mui/material";
import CommonButton from "components/Buttons/CommonButton";
import { COLORS } from "constant/colors";
import React from "react";

const TimeOffers = (props:any) => {
  const {bgImage} = props || {}
  return (
    <Box sx={{ position: "relative", background: COLORS.black.gray, pt: {md:15,sm:15,xs:10} }}>
      <Box
        sx={{
          backgroundImage:
          `${bgImage}`,
          backgroundAttachment: {md:"fixed",sm:"fixed",xs:'auto'},
          backgroundSize: {md:'100%',sm:'100% 100%',xs:"100% 100%"},
          objectFit: "cover",
          height: {md:"500px",sm:'400px',xs:'250px'},
          filter: "saturate(150%)",
        }}
      >
        <Box pt={"10%"} pl={"5%"} color={COLORS.light.white}>
          <Typography
            sx={{
              fontSize: {md:"1.5em",sm:'1.2em',xs:'1em'},
              fontWeight: {md:'bold',sm:'bold',xs:'lighter'},
              pb: 1,
            }}
          >
            Limited Time Offer
          </Typography>
          <Typography
            sx={{
              fontSize: {md:'3em',sm:'2em',xs:'1.6em'},
            }}
          >
            Special Edition
          </Typography>
          <Typography
            sx={{
              width: {md:'"50%"',sm:'60%'},
              p: 1,
              display:{md:'flex',sm:'flex',xs:'none'}
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Typography
            sx={{
              fontSize: {md:"1.5em",sm:'1.2em',xs:'.8em'},
              fontWeight: {md:"bold",sm:"bold",xs:'lighter'},
              width:{md:'100%',sm:'100%',xs:'60%'},
              pb: 1,
            }}
          >
            Buy This T-shirt At 20% Discount, Use Code OFF20
          </Typography>
          <CommonButton title="Shop Now" />
        </Box>
      </Box>
    </Box>
  );
};

export default TimeOffers;
