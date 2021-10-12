import React from 'react'
import { useGlobalContext } from '../context'
import AnimalCard from './AnimalCard'

const Gallery = () => {
  const { animals } = useGlobalContext()
  return (
    <div className='gallery-container'>
      <div className='card-grid'>
        {animals.map((item) => {
          return (
            <AnimalCard
              key={item.id}
              name={item.name}
              image={item.image}
              audio={item.audio}
              link={item.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
