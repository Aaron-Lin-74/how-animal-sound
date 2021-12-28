import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import AnimalCard from './AnimalCard'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
  FcProcess,
  FcGrid,
} from 'react-icons/fc'

const Gallery = () => {
  const {
    animals,
    sortAnimals,
    sortAnimalsDesc,
    shuffleAnimals,
    showMini,
    toggleMini,
  } = useGlobalContext()

  return (
    <div className='gallery-container'>
      <div className='btns-container'>
        <button className='utl-btns' onClick={sortAnimals}>
          <FcAlphabeticalSortingAz />
          Sort A-Z{' '}
        </button>
        <button className='utl-btns' onClick={sortAnimalsDesc}>
          <FcAlphabeticalSortingZa />
          Sort Z-A{' '}
        </button>
        <button className='utl-btns' onClick={shuffleAnimals}>
          <FcProcess />
          Shuffle
        </button>
        <button className='utl-btns' onClick={toggleMini}>
          <FcGrid />
          {showMini ? 'Normal' : 'Mini'}
        </button>
      </div>
      <div className={`${showMini ? 'card-grid-mini' : 'card-grid'}`}>
        {animals.map((animal) => {
          return (
            <AnimalCard
              // Adding a changing key will make react think it's a different component when the key changes, so it'll unmount it and mount again.
              key={Math.random()}
              name={animal.name}
              image={animal.image}
              audio={animal.audio}
              link={animal.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
