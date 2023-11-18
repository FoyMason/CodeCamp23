import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/material'

const Cashier = ({setCurrentUser}) => {
  const [currentPage, setCurrentPage] = useState('new orders')
  
  return (
    <div>
      <Navbar pages={['new orders','payment history','purchase order']} setCurrentUser={setCurrentUser} setCurrentPage={setCurrentPage}/>
      <Box sx={{marginLeft:'10%'}}>
        {
          currentPage === 'new orders' && 
          'new orders'
        }
        {
          currentPage === 'payment history' &&
          'payment history'
        }
        {
          currentPage === 'purchase order' &&
          'purchase order'
        }
      </Box>
    </div>
  )
}

export default Cashier