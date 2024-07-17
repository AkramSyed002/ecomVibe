import React from 'react'
import { Box, TextField } from '@mui/material'
import CommonButton from 'components/Buttons/CommonButton'
import { COLORS } from 'constant/colors'

const Form = () => {
  return (
    <Box sx={{
      p:4,
      bgcolor:COLORS.light.white,
      borderRadius:2
    }}>
       <form action="#">
        <TextField type='text' placeholder='NAME' fullWidth sx={{mb:1}}/>
        <TextField type='text' placeholder='SUBJECT' fullWidth sx={{mb:1}}/>
        <TextField type='email' placeholder='EMAIL' fullWidth sx={{mb:1}}/>
        <TextField type='text' placeholder='MESSAGE' multiline rows={5} fullWidth sx={{mb:2}}/>
        <CommonButton title={'SEND MESSAGE'}/>
       </form>
    </Box>
  )
}

export default Form
