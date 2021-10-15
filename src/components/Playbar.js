import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const Playbar = () => {
  const playButtonRef = useRef(null)
  const { playRandomSound } = useGlobalContext()
  return (
    <div>
      <h4>which animal did you hear?</h4>
      <button ref={playButtonRef} onClick={playRandomSound}>
        Play
      </button>
    </div>
  )
}

export default Playbar
