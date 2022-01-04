import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import AnimalCard from './AnimalCard'
import Card from './Card'
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
    loading,
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
        {loading ? (
          <img
            className='loading'
            src='https://www.google.com/images/spin-32.gif?a'
            alt='loading'
          />
        ) : (
          animals.map((animal) => {
            return (
              <Card
                key={animal.id}
                name={animal.name}
                imageURL={animal.imageURL}
                audioURL={animal.audioURL}
                link={animal.link}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Gallery
