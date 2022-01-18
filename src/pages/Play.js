import React, { useRef } from 'react'
import Gallery from '../components/Gallery'
import Playbar from '../components/Playbar'
import { useGlobalContext } from '../context'

export const PlayContext = React.createContext()

const Play = () => {
  const { animals } = useGlobalContext()

  // useRef does not trigger the re-render
  const randomPickAnimal = useRef('')
  const selectedAnimal = useRef(null)

  // make sure only one sound is in play
  const sound = useRef(null)

  // In play mode, play a random animal sound to begin the play.
  const playRandomSound = () => {
    const randomPickNum = Math.floor(animals.length * Math.random())
    randomPickAnimal.current = animals[randomPickNum].name
    sound.current = new Audio(animals[randomPickNum].audioURL)
    sound.current.play()
  }
  // In play mode, check the picked result is right or wrong
  const checkResult = (name) => {
    // need to start the play first
    if (randomPickAnimal.current === '') {
      window.confirm('Please press the play button first to start.')
      return
    }

    // stop the current sound
    sound.current.pause()

    // const guessAnimal = divRef.current.className.slice(11)
    selectedAnimal.current = name
    if (selectedAnimal.current === randomPickAnimal.current) {
      const correctText = `Great! You choose the right animal!
      Press ok if you would like to play another one. Otherwise press cancel.`
      if (window.confirm(correctText)) {
        playRandomSound()
      }
    } else {
      const wrongText = `Sorry you didn't choose the right animal. Have another try.`
      window.confirm(wrongText)
    }
  }
  return (
    <div>
      <PlayContext.Provider value={{ playRandomSound, checkResult }}>
        <Playbar />
        <Gallery mode='play' />
      </PlayContext.Provider>
    </div>
  )
}

export default Play
