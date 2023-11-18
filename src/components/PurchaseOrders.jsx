import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { parts_inventory } from '../dummyData/variables'

const PurchaseOrders = ({purchaseOrders,setPurchaseOrders}) => {
  

  const addAmount = (part, amount,idx) => {
    
    for(let i = 0; i<parts_inventory.length; i++){
      if(parts_inventory[i].part === part){
        parts_inventory[i].amount += amount
        let firstHalf = purchaseOrders.slice(0,idx)
        let secondHalf = purchaseOrders.slice(idx+1)
        let fullList = firstHalf.concat(secondHalf)
        console.log(fullList)
        setPurchaseOrders(fullList)
        console.log(purchaseOrders)
      }


    }
  } 
  
  return (
    <Box>
    {
      purchaseOrders.map((order,idx) => (
        <Stack direction={'row'} sx={{margin:'10px'}}>
        <Typography>{order.part}: </Typography>
        <Typography>{order.amount}</Typography>
        <Button variant="contained" sx={{background:'#4169e1', marginLeft:'40px'}} onClick={()=> {addAmount(order.part,order.amount,idx)}}>Accept</Button>
        </Stack>
      ))
    }
   </Box>
  )
  
 
}

export default PurchaseOrders