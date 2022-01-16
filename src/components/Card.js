import React from 'react'

function Card({ name, imageURL, audioURL, link, showMini }) {
  let sound = new Audio(audioURL)

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
        className={`${showMini ? 'animal-img-mini' : 'animal-img'}`}
        src={imageURL}
        alt={`${name} is making sound`}
        onClick={toggleSound}
        onMouseLeave={stopSound}
      />
      <div className='animal-card-footer'>
        <p>
          <a
            className='animal-link'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            Learn more about {name}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Card
