import React, { useRef } from 'react'
import { usePlayContext } from '../../contexts/PlayContext'

function PlayCard({ name, imageURL, showMini }) {
  const { checkResult } = usePlayContext()
  const divRef = useRef(null)

  return (
    <div
      className='animal-card'
      role='button'
      ref={divRef}
      onClick={() => checkResult(name)}
      onKeyDown={() => checkResult(name)}
      tabIndex={0}
    >
      <div className='animal-card-inner'>
        <div className='animal-card-front'>
          <img
            className={`${showMini ? 'animal-img-mini' : 'animal-img'}`}
            src={imageURL}
            alt={`This is ${name}`}
          />
          <p>{name}</p>
        </div>
        <div className='animal-card-back'>
          <p>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayCard
