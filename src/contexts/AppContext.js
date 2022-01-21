import React, { useContext, useEffect, useReducer, useCallback } from 'react'
import { animalsRef, getDocs } from '../firebase'
import { query, orderBy, limit, where } from 'firebase/firestore'

const AppContext = React.createContext()

const initialState = {
  animals: [],
  loading: false,
  animalType: '',
  searchTerm: '',
}

// Avoid hardcoded action strings, to reduce the bugs
const ACTIONS = {
  SET_ANIMALS: 'SET_ANIMALS',
  OPEN_LOADING: 'OPEN_LOADING',
  CLOSE_LOADING: 'CLOSE_LOADING',
  SET_SEARCHTERM: 'SET_SEARCHTERM',
  SET_ANIMALTYPE: 'SET_ANIMALTYPE',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ANIMALS:
      return { ...state, animals: action.payload.animals }
    case ACTIONS.OPEN_LOADING:
      document.body.style.setProperty('overflow', 'hidden', 'important')
      return { ...state, loading: true }
    case ACTIONS.CLOSE_LOADING:
      document.body.style.setProperty('overflow', 'visible', 'important')
      return { ...state, loading: false }
    case ACTIONS.SET_SEARCHTERM:
      return { ...state, searchTerm: action.payload.searchTerm }
    case ACTIONS.SET_ANIMALTYPE:
      return { ...state, animalType: action.payload.animalType }
    default:
      return state
  }
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Fetch the animals from server when animalType changes
  useEffect(() => {
    const loadAnimals = async (animalQuery) => {
      dispatch({ type: ACTIONS.OPEN_LOADING })
      try {
        const querySnapshot = await getDocs(animalQuery)
        const result = []
        querySnapshot.forEach((doc) => {
          result.push(doc.data())
        })
        dispatch({ type: ACTIONS.SET_ANIMALS, payload: { animals: result } })
      } catch (err) {
        console.log(err)
      } finally {
        dispatch({ type: ACTIONS.CLOSE_LOADING })
      }
    }
    const animalQuery = query(animalsRef, orderBy('name', 'desc'), limit(100))
    const animalQueryByType = query(
      animalsRef,
      where('type', '==', state.animalType),
      orderBy('name', 'desc'),
      limit(16)
    )
    let q = state.animalType === '' ? animalQuery : animalQueryByType
    loadAnimals(q)
  }, [state.animalType])

  // For referential equality as this function is in the dependency array of another hook
  const setSearchTerm = useCallback(
    (searchTerm) =>
      dispatch({ type: ACTIONS.SET_SEARCHTERM, payload: { searchTerm } }),
    []
  )

  return (
    <AppContext.Provider
      value={{
        animals: state.animals,
        searchTerm: state.searchTerm,
        setSearchTerm,
        loading: state.loading,
        setAnimalType: (animalType) =>
          dispatch({ type: ACTIONS.SET_ANIMALTYPE, payload: { animalType } }),
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
