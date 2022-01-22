import { useState, useEffect } from 'react'
import { auth, onAuthStateChanged } from '../firebase'

// custome hook to get the current user
function useAuth() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])
  return currentUser
}

export default useAuth
