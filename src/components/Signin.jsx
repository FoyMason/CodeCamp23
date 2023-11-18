import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'



const Signin = ({ setCurrentUser, passwordData }) => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const verify = () => {

    for(let i = 0; i < passwordData.length; i++){
      if(user === passwordData[i].user){
        if(pass === passwordData[i].pass){
          setCurrentUser(passwordData[i].role)
          console.log('good')
        }
      }
    }
  }

  return (
    <Box sx={{margin:'0 auto',width:'30%',border:'black 1px solid', borderRadius:'15px'}}>
      <Stack direction={'column'}>
      <Typography variant='h2' textAlign={'center'}>Sign In</Typography>
      <Stack direction={'row'} sx={{margin:'auto', marginTop:'20px'}}>
      <TextField label="Username" onChange={(e) => {setUser(e.target.value)}}/>
      </Stack>
      <Stack direction={'row'}  sx={{margin:'auto', marginTop:'20px'}}>
      <TextField id="standard-password-input" label="Password" type="password" onChange={(e) => {setPass(e.target.value)}}/>
      </Stack>
      <Button onClick={verify}>Sign In</Button>
      </Stack>
    </Box>
  )
}

export default Signin