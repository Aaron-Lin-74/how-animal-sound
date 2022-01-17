import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const PlayCard = ({ name, imageURL, showMini }) => {
  const { checkResult } = useGlobalContext()
  const divRef = useRef(null)

  return (
    <div className='animal-card' ref={divRef} onClick={() => checkResult(name)}>
      <div className='animal-card-inner'>
        <div className='animal-card-font'>
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
