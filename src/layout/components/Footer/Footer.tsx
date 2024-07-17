import React from 'react'
import { Box, Button, Container, Divider, Grid, List, ListItem, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { COLORS } from 'constant/colors'
import { FacebookOutlined, Google, Instagram, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <Box mt={10}>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item md={5} sm={4} xs={12}>
            <img
             src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" 
            alt="logo"
            width={'30%'}
             />
            <Typography
            sx={{
              fontSize:'1.5em',
              fontWeight:'bold',
              p:2
            }}
            >The best look anytime, anywhere.</Typography>
          </Grid>
          <Grid item md={7} sm={8} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={3.5} sm={3.5} xs={6}>
                <Typography fontWeight={'bold'} fontSize={'1.2em'}>For Her</Typography>   
                <List>
                  <ListItem><Link to={'#'} style={linkStyle}>Women Jeans</Link></ListItem>
                  <ListItem><Link to={'#'} style={linkStyle}>Women 3</Link></ListItem>
                  <ListItem><Link to={'#'} style={linkStyle}>Jeans</Link></ListItem>
                  <ListItem><Link to={'#'} style={linkStyle}>Women 4</Link></ListItem>
                </List>
              </Grid>
              <Grid item md={3.5} sm={3.5} xs={6}>
              <Typography fontWeight={'bold'} fontSize={'1.2em'}>For Him</Typography>   
                <List>
                  <ListItem><Link to={'#'} style={linkStyle}>Men Jeans</Link></ListItem>
                  <ListItem><Link to={'#'} style={linkStyle}>Men 3</Link></ListItem>
                  <ListItem><Link to={'#'} style={linkStyle}>Jeans</Link></ListItem>
                  <ListItem><Link to={'#'} style={linkStyle}>Men 4</Link></ListItem>
                </List>
              </Grid>
              <Grid item md={5} sm={5} xs={12}>
              <Typography fontWeight={'bold'} fontSize={'1.2em'}>Subscribe</Typography>   
                <TextField
                 type='email'
                  placeholder='Your Email Adress'
                  fullWidth
                  />
                <Button variant='contained' sx={subscribeButton}>Subscribe</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider/>
          
          <Box
          sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            textAlign:'center'
          }}
          >
            <Typography sx={{display:{md:'flex',xs:'none'}}}>
            Copyright © 2024 Brandstore. Powered by Brandstore.
            </Typography>
            <List sx={{display:'flex',p:2}}>
              <ListItem>
                <FacebookOutlined/>
              </ListItem>
              <ListItem><YouTube/></ListItem>
              <ListItem><Twitter/></ListItem>
              <ListItem><Instagram/></ListItem>
              <ListItem><Google/></ListItem>
            </List>
          </Box>

      </Container>
    </Box>
  )
}

export default Footer

const linkStyle={
  color:'gray ',
  textDecoration:"none",
}

const subscribeButton={
  borderRadius:"0px",
  paddingLeft:"20px",
  paddingTop:'10px',
  paddingBottom:'10px',
  background:'#212121',
  fontWeight:'600px',
  color:COLORS.light.white,
  mt:1
}