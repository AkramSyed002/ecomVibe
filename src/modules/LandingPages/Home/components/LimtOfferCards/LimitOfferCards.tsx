import { Box, Container, Grid, Typography } from '@mui/material'
import { COLORS } from 'constant/colors'
import { OFFER_CARD } from 'constant/data'
import React from 'react'

const LimitOfferCards = () => {
  return (
    <Box
    sx={{
        pt:8,
        background:COLORS.black.gray
    }}
    >
        <Container maxWidth='lg' sx={{
            p:6
        }}>
      <Grid container spacing={3}>
        {OFFER_CARD.map((item)=>(
            <Grid item md={3} sm={6} xs={12}>
                <Box
                sx={{
                    textAlign:'center',
                }}
                >
                    <img src={item.poster} 
                    alt="poster"
                    style={{
                        width:'20%'
                    }}
                     />
                     <Typography fontWeight={'bold'} p={1}>{item.title}</Typography>
                     <Typography>{item.description}</Typography>
                </Box>
            </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  )
}

export default LimitOfferCards
