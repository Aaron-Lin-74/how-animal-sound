import React, { useContext, useState, useEffect, useRef } from 'react'
import animalList from './data'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [animals, setAnimals] = useState(animalList)
  const [searchTerm, setSearchTerm] = useState('')

  // useRef does not trigger the re-render
  const randomPickAnimal = useRef('')
  const selectedAnimal = useRef(null)
  // make sure only one sound is in play
  const sound = useRef(null)

  // Load the data from data.js, could implement API fetch in the future
  useEffect(() => {
    setAnimals(animalList)
  }, [])

  //  Use the filter to implement the search function
  useEffect(() => {
    const searchedAnimals = animals.filter((animal) =>
      animal.name.includes(searchTerm)
    )
    setAnimals(searchedAnimals)
  }, [searchTerm])

  // Sort the animals by name A-Z, be aware, no copy is made!
  const sortAnimals = () => {
    animalList.sort((animal1, animal2) => {
      if (animal1.name < animal2.name) {
        return -1
      } else if (animal1.name > animal2.name) {
        return 1
      } else {
        return 0
      }
    })
    // We need to use the spread operator to copy the array to trigger the rerender, otherwise, since the reference does not change, react would not rerender it!
    setAnimals([...animalList])
  }

  // Sort the animals by name in descent order Z-A
  const sortAnimalsDesc = () => {
    animalList.sort((animal1, animal2) => {
      if (animal1.name < animal2.name) {
        return 1
      } else if (animal1.name > animal2.name) {
        return -1
      } else {
        return 0
      }
    })
    setAnimals([...animalList])
  }

  const shuffleAnimals = () => {
    animalList.sort((animal1, animal2) => {
      return 0.5 - Math.random()
    })
    setAnimals([...animalList])
  }

  // In play mode, play a random animal sound to begin the play.
  const playRandomSound = () => {
    const randomPickNum = Math.floor(animals.length * Math.random())
    randomPickAnimal.current = animals[randomPickNum].name
    sound.current = new Audio(animals[randomPickNum].audio)
    sound.current.play()
  }

  const checkResult = (name) => {
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
  // In play mode, check the picked result is right or wrong

  return (
    <AppContext.Provider
      value={{
        animals,
        setSearchTerm,
        sortAnimals,
        sortAnimalsDesc,
        shuffleAnimals,
        playRandomSound,
        checkResult,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
