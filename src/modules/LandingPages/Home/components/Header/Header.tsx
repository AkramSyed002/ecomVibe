import React from "react";
import { Box, Typography } from "@mui/material";
import CommonButton from "components/Buttons/CommonButton";
import { COLORS } from "constant/colors";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <img
        src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg"
        alt="headerImg"
        style={{
          height: "650px",
          width: "100%",
          objectFit: "cover",
          filter:"brightness(80%)"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          height: "650px",
          width: "100%",
          backgroundImage: `linear-gradient(to right,rgba(0, 94, 134, 0.858), rgba(19, 81, 108, 0.107) )`,
          backgroundSize:'cover',

        }}
      >
        <Box padding={{md:'2.5em',sm:'1.5em',xs:'.4em'}}>
          <Typography
            sx={{
              fontSize: {md:'4em',sm:'3em',xs:'1.8em'},
              fontWeight: "700",
              color: COLORS.light.white,
              mt: {md:'10%',sm:'25%',xs:'50%'},
            }}
          >
            Raining Offers For <br /> Hot Summer!
          </Typography>
          <Typography
            sx={{
              fontSize:{md:"2em",sm:'1.5em',xs:"1em"},
              padding: "10px",
              color: COLORS.light.white,
            }}
          >
            25% Off On All Products
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: {md:3,sm:5,xs:20},
            }}
          >
            <CommonButton title={"SHOP NOW"} />
            <CommonButton title={"FIND MORE"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
