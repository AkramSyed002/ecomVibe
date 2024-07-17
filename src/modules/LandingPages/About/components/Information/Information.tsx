import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { COLORS } from "constant/colors";

const Information = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, p: 3 }}>
      <Grid container spacing={0} sx={{ bgcolor: COLORS.light.white }}>
        <Grid item md={6}>
          <Typography
            sx={{
              fontSize: {md:"3em",sm:'2em',xs:'2em'},
              p: 2,
              fontWeight: "bold",
              mt: 5,
            }} 
          >
            Who We Are
          </Typography>
          <Typography
            sx={{
              p: 2,
              fontWeight: 100,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
            erat consequat auctor eu in elit.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <img
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg"
            alt="Info Img"
            style={{ width: "100%", objectFit: "cover"}}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Information;
