import React, { useContext, useState, useEffect } from 'react'
import animalList from './data'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [animals, setAnimals] = useState(animalList)
  const [searchTerm, setSearchTerm] = useState('')

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

  return (
    <AppContext.Provider
      value={{
        animals,
        setSearchTerm,
        sortAnimals,
        sortAnimalsDesc,
        shuffleAnimals,
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
