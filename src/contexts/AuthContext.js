import React, { useReducer, useContext } from 'react'

const AuthContext = React.createContext()

const initialState = {
  name: '',
  email: '',
  photo: '',
}

const ACTIONS = {
  SET_USER_LOGIN: 'SET_USER_LOGIN',
  SET_SIGN_OUT: 'SET_SIGN_OUT',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_USER_LOGIN:
      return {
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
      }
    case ACTIONS.SET_SIGN_OUT:
      return { name: '', email: '', photo: '' }
    default:
      return state
  }
}
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const selectUserName = () => state.name
  const selectUserEmail = () => state.email
  const selectUserPhoto = () => state.photo
  const signIn = () => {
    dispatch({type: ACTIONS.SET_USER_LOGIN, payload: {}})
  }
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
