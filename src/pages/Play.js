import React from 'react'
import Gallery from '../components/Gallery'
import Playbar from '../components/Playbar'
import PlayProvider from '../contexts/PlayContext'

function Play() {
  return (
    <main>
      <PlayProvider>
        <Playbar />
        <Gallery mode='play' />
      </PlayProvider>
    </main>
  )
}

export default Play
