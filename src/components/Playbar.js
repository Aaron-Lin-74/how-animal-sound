import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const Playbar = () => {
  const playButtonRef = useRef(null)
  const { playRandomSound } = useGlobalContext()
  return (
    <div className='play-bar'>
      <h2>Which animal did you hear?</h2>
      <button ref={playButtonRef} onClick={playRandomSound}>
        Play
      </button>
    </div>
  )
}

export default Playbar
