import React from 'react'
import { useGlobalContext } from '../context'
import AnimalCard from './AnimalCard'

const Gallery = () => {
  const { animals, sortAnimals, sortAnimalsDesc } = useGlobalContext()
  return (
    <div className='gallery-container'>
      <button onClick={sortAnimals}>Sort A-Z </button>
      <button onClick={sortAnimalsDesc}>Sort Z-A </button>
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
