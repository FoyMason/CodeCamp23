import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { current_car_inventory, purchase_orders, parts_inventory } from '../dummyData/variables'
import CarNodes from './CarNodes'
import PurchaseOrders from './PurchaseOrders'
import CardDetails from './CardDetails'

/*

*/


const Manager = ({setCurrentUser}) => {
  const [currentPage, setCurrentPage] = useState('cars')
  const [selectedCar, setSelectedCar] = useState(null)
  const [purchaseOrders, setPurchaseOrders] = useState(purchase_orders)

  return (
    <div>
      <Navbar setCurrentUser={setCurrentUser} pages={['cars', 'inventory', 'orders','customer info','payment history','employee info']} setCurrentPage={setCurrentPage}/>
      <Box sx={{marginLeft:'10%'}}>
        <Grid container>
        {currentPage === 'cars' &&
            current_car_inventory.map((car, idx) => (
              <Grid item sx={{margin:'20px'}}>
                <CarNodes item={car} idx={idx} setCurrentPage={setCurrentPage} setSelectedCar={setSelectedCar}/>
              </Grid>
            ))

        }
        </Grid>
        {currentPage === 'inventory' && 
          parts_inventory.map((item) => (
          <Stack direction={'row'}>
          <Typography>{item.part}: </Typography>
          <Typography>{item.amount}</Typography>
          </Stack>
        ))
        }
        {
          currentPage === 'orders' &&  
            <PurchaseOrders purchaseOrders={purchaseOrders} setPurchaseOrders={setPurchaseOrders}/>
        }
        {
          currentPage === 'car details' &&
          <CardDetails item={selectedCar} setCurrentPage={setCurrentPage}/>
        }
        {
          currentPage === 'customer info' &&
          'customer info'
        }
        {
          currentPage === 'payment history' &&
          'payment history'
        }
        {
          currentPage === 'employee info' &&
          'employe info'
        }
      </Box>

    </div>
  )
}

export default Manager