import React, { useState} from 'react'
import { Button, Box, Stack, Typography, TextField } from '@mui/material'




const CardDetails = ({item}) => {
  const { orderId, customer, make, model, service, notes } = item

  
  const [note, setNote] = useState('');
  
  const handleNoteSubmit = () => {
    const textFieldValue = document.getElementById('mechNote').value;
    setNote(textFieldValue);
  };
  
 
  return (
    <Box>
        <Stack space={2} gap="60px"  sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <Typography variant="h6"> Order Number {orderId} for {customer} </Typography>
        </Stack>
        <Stack space={2} gap="60px"  sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <Typography variant="h6"> Company: {make}, Model: {model}</Typography>
        </Stack>
        <Stack space={2} gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <Typography variant="h6"> Service {customer} requires: {service} </Typography>
        </Stack>
        <Stack space={2} gap="60px"  sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <Typography variant="h6"> Mechanic's note: 
        <TextField id="mechNote"  defaultValue={notes} rows={6} multiline variant="filled"   sx={{width: '80%', mx: 'auto', ml: 4 }} />
        </Typography>
        <Button variant="contained" onClick={handleNoteSubmit} sx={{width: '5rem', mx: 'auto', my: 1, }}>
          Submit
        </Button>
        </Stack>
        
        <Stack>
          {note}
        </Stack>

    
    </Box>
  )
}
export default CardDetails
