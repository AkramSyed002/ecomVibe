import { Box } from '@mui/material'
import Header from 'components/Header/Header'
import { COLORS } from 'constant/colors'
import React from 'react'
import ContactCards from '../../componenets/ContactCards/ContactCards'
import ContactForm from '../../componenets/ContactForm/ContactForm'

const ContactContainer = () => {
  return (
    <Box bgcolor={COLORS.black.gray}>
      <Header poster={'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-06.jpg'} title={"CONTACT US"}/>
      <ContactCards/>
      <ContactForm/>
    </Box>
  )
}

export default ContactContainer
