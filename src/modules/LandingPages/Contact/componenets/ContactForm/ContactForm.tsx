import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Form from "./Form/Form";

const ContactForm = () => {
  return (
    <Box mt={10} pb={8}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item md={6} mt={10}>
            <Typography>Don't be a stranger!</Typography>
            <Typography sx={{ fontSize: {md:"2.5em",sm:'2em',xs:'2em'}, pb: 2, fontWeight: "bold" }}>
              You tell us. We listen.
            </Typography>
            <Typography>
              Cras elementum finibus lacus nec lacinia. Quisque non convallis
              nisl, eu condimentum sem. Proin dignissim libero lacus, ut
              eleifend magna vehicula et. Nam mattis est sed tellus.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
