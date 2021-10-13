import React from 'react'

const AnimalCard = ({ name, image, audio, link }) => {
  const sound = new Audio(audio)
  const toggleSound = () => {
    if (sound.paused) {
      sound.play()
    } else {
      sound.pause()
    }
  }

  const stopSound = () => {
    if (!sound.paused) {
      setTimeout(() => sound.pause(), 1000)
    }
  }

  return (
    <div className={`animal-card ${name}`}>
      <img
        className='animal-img'
        src={image}
        alt={`${name} is making sound`}
        onClick={toggleSound}
        onMouseLeave={stopSound}
      />
      {/* <h4 className="animal-name">{name.charAt(0).toUpperCase() + name.slice(1)}</h4> */}
      <div className='animal-card-footer'>
        {/* <h4 className='animal-name-capitalize'>{name}</h4> */}
        <p>
          <a className='animal-link' href={link} target='_blank'>
            Learn more about {name}
          </a>
        </p>
      </div>
    </div>
  )
}

export default AnimalCard
