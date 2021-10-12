import React, { useContext } from 'react'
import animals from './data'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ animals }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
