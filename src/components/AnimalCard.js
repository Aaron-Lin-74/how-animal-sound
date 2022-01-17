import React, { useState, useEffect } from 'react'
import { FcSpeaker } from 'react-icons/fc'

function AnimalCard({ name, imageURL, audioURL, link, showMini }) {
  // const sound = new Audio(audioURL)
  const [sound] = useState(new Audio(audioURL))
  const [playing, setPlaying] = useState(false)

  const toggleSound = () => {
    setPlaying(!playing)
  }
  const stopSound = () => {
    setPlaying(false)
  }

  useEffect(() => {
    playing ? sound.play() : sound.pause()
  }, [playing])

  useEffect(() => {
    sound.addEventListener('ended', () => setPlaying(false))
    return sound.removeEventListener('ended', () => setPlaying(false))
  }, [])

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
            Learn {name}
          </a>
          {playing && <FcSpeaker />}
        </p>
      </div>
    </div>
  )
}

export default AnimalCard
