import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { OWNER_CARDS } from 'constant/data'
import { COLORS } from 'constant/colors'

const ContactCards = () => {
  return (
    <Box p={5} textAlign={'center'}>
        <Typography
        sx={{
            fontSize:{md:'3em',sm:'2em',xs:"2em"},
            pt:5,
            fontWeight:'bold'
        }}
        >We're here to help.​</Typography>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          {
            OWNER_CARDS.map((own)=>(
                <Grid item md={3} sm={6} xs={12}>
                    <Box
                    sx={{
                        bgcolor:COLORS.light.white,
                        borderRadius:2,
                        p:4
                    }}
                    >
                        <Typography
                        sx={{
                            fontSize:"1.5em",
                            fontWeight:'bold',
                            p:1
                        }}
                        >{own.title}</Typography>
                        <Typography
                        fontSize={'14px'}
                        >{own.description}</Typography>
                        <Typography
                        sx={{
                            p:1,
                            color:COLORS.blue.blue,
                            textDecoration:"underline",
                            fontWeight:'bold',
                            cursor:'pointer'
                        }}
                        >{own.phoneNumber}</Typography>
                    </Box>
                </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactCards
