import React, { useState, useEffect } from 'react'
import Gallery from '../components/Gallery'
import Playbar from '../components/Playbar'

const Play = () => {
  const [Result, setResult] = useState(false)

  // player choose the answer by clicking the animal card
  const [yourChoice, setYourChoice] = useState()
  // Randomly pick up an animal sound for guess

  return (
    <div>
      <h1>This is the play page</h1>
      <Playbar />
      <Gallery />
    </div>
  )
}

export default Play
