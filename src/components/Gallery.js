import React from 'react'
import { useGlobalContext } from '../context'
import AnimalCard from './AnimalCard'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from 'react-icons/fc'

const Gallery = () => {
  const { animals, sortAnimals, sortAnimalsDesc, shuffleAnimals } =
    useGlobalContext()
  return (
    <div className='gallery-container'>
      <button onClick={sortAnimals}>
        <FcAlphabeticalSortingAz />
        Sort A-Z{' '}
      </button>
      <button onClick={sortAnimalsDesc}>
        <FcAlphabeticalSortingZa />
        Sort Z-A{' '}
      </button>
      <button onClick={shuffleAnimals}>Shuffle</button>
      <div className='card-grid'>
        {animals.map((animal) => {
          return (
            <AnimalCard
              key={animal.id}
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
