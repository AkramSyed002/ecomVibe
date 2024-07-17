import { Box } from "@mui/material";
import Header from "components/Header/Header";
import { COLORS } from "constant/colors";
import React from "react";
import Information from "../../components/Information/Information";
import OurTeam from "../../components/OurTeam/OurTeam";
import LimitOfferCards from "modules/LandingPages/Home/components/LimtOfferCards/LimitOfferCards";
import TimeOffers from "modules/LandingPages/Home/components/TimeOffers/TimeOffers";

const AboutContainer = () => {
  return (
    <Box bgcolor={COLORS.black.gray}>
      <Header
        poster={
          "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/05/banner-04.jpg"
        }
        title={"ABOUT US"}
      />
      <Information />
      <OurTeam />
      <TimeOffers
        bgImage={`url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-05.jpg)`}
      />
      <LimitOfferCards />
    </Box>
  );
};

export default AboutContainer;
