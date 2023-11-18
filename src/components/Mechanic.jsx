import React, { useState } from 'react'
import Navbar from './Navbar'
//import { current_car_inventory } from '../dummyData/variables'
import CarNodes from './CarNodes'
import { Box, Grid } from '@mui/material'
import CardDetails from './CardDetails'
import NewOrderForm from './NewOrderForm'


const Mechanic = ({setCurrentUser, currentCarInventory}) => {
  const [currentPage, setCurrentPage] = useState('car cards')
  const [selectedCar, setSelectedCar] = useState(null)

  console.log(currentCarInventory)
  return (
    <div>
      <Navbar pages={['car cards', 'order forms']} setCurrentUser={setCurrentUser} setCurrentPage={setCurrentPage}/>
      
      <Box sx={{marginLeft:'10%'}}>
      
      {
      currentPage === 'car cards' &&
      <Grid container>
      {currentCarInventory.map((item, index) => (
        <Grid key={index} item sx={{margin:'20px'}}>
          <CarNodes key={item} setCurrentPage={setCurrentPage} item={item} index={index} setSelectedCar={setSelectedCar}/>
        </Grid>
      ))}
      </Grid>
      }
      {
        currentPage === 'car details' && 
        <CardDetails item={selectedCar} setCurrentPage={setCurrentPage}/>
      }
      {
        currentPage === 'order forms' && 
        <NewOrderForm setCurrentPage={setCurrentPage}/>
      }


      </Box>
    </div>
  )
}

export default Mechanic