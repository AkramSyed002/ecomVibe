import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ADVERTISEMEMT_CARD } from "constant/data";
import CommonButton from "components/Buttons/CommonButton";
import { COLORS } from "constant/colors";

const OffersCards = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {ADVERTISEMEMT_CARD?.map((offer: any) => (
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            sx={{
              position: "relative",
              mt: 10,
              color: COLORS.light.white,
            }}
          >
            <img
              src={offer.poster}
              alt="posterImg"
              width={"100%"}
              height={"500px"}
              style={{
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                p: "2em",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5em",
                  pb: 1,
                  fontWeight: "bold",
                }}
              >
                {offer?.title}
              </Typography>
              <Typography sx={{ pb: 1 }}>{offer?.description}</Typography>
              <CommonButton title={"SHOP NOW"} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OffersCards;
