import React from 'react'
import { Box } from '@mui/material'
import Footer from 'layout/components/Footer/Footer'
import NavigationBar from 'layout/components/Navbar/NavigationBar'
import { Outlet } from 'react-router-dom'

const LayoutContainer = () => {
  return (
       <Box>
       <NavigationBar/>
       <Box>
         <Outlet/>
       </Box>
       <Footer/>
    </Box>
  )
}

export default LayoutContainer

