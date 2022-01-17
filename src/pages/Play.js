import React from 'react'
import Gallery from '../components/Gallery'
import Playbar from '../components/Playbar'

const Play = () => {
  return (
    <div>
      <Playbar />
      <Gallery mode='play' />
    </div>
  )
}

export default Play
