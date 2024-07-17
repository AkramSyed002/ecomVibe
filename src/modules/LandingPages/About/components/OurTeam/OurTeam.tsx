import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "constant/colors";
import { OUR_TEAMS } from "constant/data";
import React from "react";

const OurTeam = () => {
  return (
    <Box bgcolor={COLORS.light.white} textAlign={'center'}>
      <Container maxWidth="md">
        <Typography
         sx={{
            fontSize:'3em',
            fontWeight:'bold',
            pt:8,
            pb:2
         }}
        >Our Team</Typography>
        <Typography >
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra.
        </Typography>
        <Grid container spacing={3} sx={{p:3}}>
            {
                OUR_TEAMS.map((team)=>(
                    <Grid item md={4} sm={6} xs={12}>
                        <Box
                        sx={{
                            bgcolor:COLORS.black.gray,
                            p:5,
                            borderRadius:2
                        }}
                        >
                            <img 
                            src={team.profile} 
                            alt="profileImg"
                            style={{
                                width:'100px',
                                height:'100px',
                                borderRadius:'50%',
                                objectFit:'cover'
                            }}
                            />
                            <Typography
                            sx={{
                                fontWeight:'bold',
                                fontSize:'20px',
                                pt:2
                            }}
                            >{team.fullName}</Typography>
                            <Typography>{team.job}</Typography>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam;
