import React, { useContext, useEffect, useRef, useReducer } from 'react'
import { animalsRef, getDocs } from './firebase'
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
  // const animalList = useRef()

  // useRef does not trigger the re-render
  const randomPickAnimal = useRef('')
  const selectedAnimal = useRef(null)

  // make sure only one sound is in play
  const sound = useRef(null)

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
        // animalList.current = result
        dispatch({ type: ACTIONS.CLOSE_LOADING })
      } catch (err) {
        console.log(err)
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

  // //  Use the filter to implement the search function
  // useEffect(() => {
  //   if (animalList.current) {
  //     let searchedAnimals = animalList.current.filter((animal) =>
  //       animal.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  //     )
  //     if (state.searchTerm.length === 0) {
  //       searchedAnimals = animalList.current
  //     }
  //     dispatch({
  //       type: ACTIONS.SET_ANIMALS,
  //       payload: { animals: searchedAnimals },
  //     })
  //   }
  // }, [state.searchTerm])

  // // Sort the animals by name A-Z, be aware, no copy is made!
  // const sortAnimals = () => {
  //   animalList.current.sort((animal1, animal2) => {
  //     if (animal1.name < animal2.name) {
  //       return -1
  //     }
  //     if (animal1.name > animal2.name) {
  //       return 1
  //     }
  //     return 0
  //   })

  //   // We need to use the spread operator to copy the array to trigger the rerender, otherwise, since the reference does not change, react would not rerender it!
  //   dispatch({
  //     type: ACTIONS.SET_ANIMALS,
  //     payload: { animals: [...animalList.current] },
  //   })
  // }

  // // Sort the animals by name in descent order Z-A
  // const sortAnimalsDesc = () => {
  //   animalList.current.sort((animal1, animal2) => {
  //     if (animal1.name < animal2.name) {
  //       return 1
  //     }
  //     if (animal1.name > animal2.name) {
  //       return -1
  //     }
  //     return 0
  //   })
  //   dispatch({
  //     type: ACTIONS.SET_ANIMALS,
  //     payload: { animals: [...animalList.current] },
  //   })
  // }

  // const shuffleAnimals = () => {
  //   animalList.current.sort((animal1, animal2) => {
  //     return 0.5 - Math.random()
  //   })
  //   dispatch({
  //     type: ACTIONS.SET_ANIMALS,
  //     payload: { animals: [...animalList.current] },
  //   })
  // }

  // In play mode, play a random animal sound to begin the play.
  const playRandomSound = () => {
    const randomPickNum = Math.floor(state.animals.length * Math.random())
    randomPickAnimal.current = state.animals[randomPickNum].name
    sound.current = new Audio(state.animals[randomPickNum].audioURL)
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

  const setSearchTerm = (searchTerm) =>
    dispatch({ type: ACTIONS.SET_SEARCHTERM, payload: { searchTerm } })

  return (
    <AppContext.Provider
      value={{
        animals: state.animals,
        searchTerm: state.searchTerm,
        setSearchTerm,
        playRandomSound,
        checkResult,
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
