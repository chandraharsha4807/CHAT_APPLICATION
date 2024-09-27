import { CircularProgress } from '@mui/material'
import React from 'react'

const StreamLoader = () => {
  return (
    <div className='streaming-chat-card'>
      <CircularProgress disableShrink size={25}/>
    </div>
  )
}

export default StreamLoader
