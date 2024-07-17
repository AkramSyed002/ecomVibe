import { Box, Typography } from '@mui/material'
import { COLORS } from 'constant/colors'
import React from 'react'

const Header = (props:any) => {
    const {poster,title} = props || {}
  return (
    <Box
    sx={{
      position: "relative",
    }}
  >
    <img
      src={poster}
      alt="headerImg"
      style={{
        height: "550px",
        width: "100%",
        objectFit: "cover",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: "0%",
        height: "550px",
        width: "100%",
        backgroundImage: `linear-gradient(to right,rgba(4%,4%,60%,.6), rgba(5%,35%,45%,0.5) )`,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
      }}
    >
        <Typography
          sx={{
            fontSize: {md:"4em",sm:'3em',xs:'2em'},
            fontWeight: "700",
            color: COLORS.light.white,
          }}
        >
         {title}
        </Typography>
        </Box>
        </Box>
  )
}

export default Header
