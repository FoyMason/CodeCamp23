import { Button, Stack } from '@mui/material'
import React from 'react'


const Navbar = ({pages, setCurrentPage, setCurrentUser}) => {
  return (
    <Stack sx={{position:'absolute', left:'0', height:'100%', width:'10%', backgroundColor:'#4169e1'}}>
      {pages.map((item) => (
        <Button sx={{color:'white'}} key={item} onClick={() => {setCurrentPage(item)}}>{item}</Button>
      ))}

      <Button sx={{color:'white'}} onClick={() => {setCurrentUser('sign in')}}>Log Out</Button>
    </Stack>
  )
}

export default Navbar
