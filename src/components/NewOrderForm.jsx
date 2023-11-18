import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const NewOrderForm = ({setCurrentPage}) => {
  const [part, setPart] = useState('')
  const [amount, setAmount] = useState(0)
  
  const submit = () => {
    console.log(part)
    console.log(amount)
    setPart('')
    setAmount(0)

    setCurrentPage('car details')
  }

  return (
    <Box>
      <Typography variant={'h2'} textAlign={'center'}>New Order Form</Typography>
      <Stack sx={{margin:'0 auto', width:'300px'}} direction={'column'}>
        <TextField value={part} onChange={(e) => {setPart(e.target.value)}} label={'part'} sx={{margin:'10px'}}/>
        <TextField value={amount} onChange={(e) => {setAmount(e.target.value)}} label={'amount'} type={'number'} sx={{margin:'10px'}}/>
        <Button onClick={submit}>Submit</Button>
      </Stack>
    </Box>
  )
}

export default NewOrderForm