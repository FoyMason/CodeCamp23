import React, { useState } from 'react'
import {Box, Stack, Typography, Card , CardActionArea, CardContent, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { SettingsCell } from '@mui/icons-material';

// update = if true, add extended card list check doc for info

const Mechanic = ({item,update,index, setCurrentPage, setSelectedCar}) => {

    const createCircles = (color) => {
      let progressList = []
      let unDoneList = [1,2,3]
      for(let i = 0; i < item.progress; i++){
        progressList.push(i)
        unDoneList.shift()
      }


      if(color === 'green'){
        return progressList
      } else if(color === 'black'){
        return unDoneList
      }  
    }


  return (
   
<Card sx={{ width:'200px', height:'200px'}}>
  <CardActionArea onClick={() => {setSelectedCar(item, setCurrentPage('car details'))}}>
      <CardContent>
      <Typography variant="h6" >
      customer: {item.customer}
      </Typography>
      <Typography variant='h6' >
      make: {item.make}
      </Typography>
      <Typography sx={{}} color="text.secondary">
      model: {item.model}
      </Typography>
      <Typography sx={{}} color="text.secondary">
      
      progress: 
      <Stack direction={'row'}>
        {
          createCircles('green').map(() => (
              <CircleIcon style={{ color: 'green' }} />
          ))
        }
        {
          createCircles('black').map(() => (
              <CircleIcon style={{ color: 'black' }} />
          ))
        }
      </Stack>
      </Typography>
      </CardContent>
    </CardActionArea>
    
  
    </Card>          
  );
};

export default Mechanic


