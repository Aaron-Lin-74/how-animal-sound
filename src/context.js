import React, { useContext, useState, useEffect } from 'react'
import animalList from './data'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [animals, setAnimals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setAnimals(animalList)
  }, [])

  useEffect(() => {
    const searchedAnimals = animalList.filter((animal) =>
      animal.name.includes(searchTerm)
    )
    console.log(searchedAnimals)
    setAnimals(searchedAnimals)
  }, [searchTerm])
  return (
    <AppContext.Provider value={{ animals, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
