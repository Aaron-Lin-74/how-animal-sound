import React, { useRef, useContext } from 'react'
import { PlayContext } from '../../pages/Play'

const PlayCard = ({ name, imageURL, showMini }) => {
  const { checkResult } = useContext(PlayContext)
  const divRef = useRef(null)

  return (
    <div className='animal-card' ref={divRef} onClick={() => checkResult(name)}>
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
          <p> {name}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayCard
