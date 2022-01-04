// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { useState, useEffect } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from 'firebase/auth'
import {
  getFirestore,
  query,
  collection,
  orderBy,
  limit,
  where,
  updateDoc,
  addDoc,
  onSnapshot,
  getDocs,
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: 'G-E5J63K835R',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()
const animalsRef = collection(db, 'animals')

const signInWithGoogle = async () => {
  // signInWithRedirect(auth, provider)
  try {
    await signInWithPopup(auth, provider)
  } catch (err) {
    console.log(err)
  }
}

const signOutUser = () => {
  // Sign out of Firebase.
  signOut(auth)
}

// Returns true if a user is signed-in.
const hasUserSignedIn = () => {
  return !!auth.currentUser
}
const animalQuery = query(
  animalsRef,
  where('type', '==', 'bird'),
  orderBy('name', 'desc'),
  limit(10)
)
export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithGoogle,
  hasUserSignedIn,
  signOutUser,
  addDoc,
  getDocs,
  animalQuery,
  animalsRef,
  onSnapshot,
  updateProfile,
}

// custome hook to get the current user
export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsubscribe
  }, [])
  return currentUser
}

// export function useLoadAnimals() {
//   const [animals, setAnimals] = useState([])

//   useEffect(() => {
//     const loadAnimals = async () => {
//       const querySnapshot = await getDocs(animalQuery)
//       const result = []
//       querySnapshot.forEach((doc) => {
//         result.push(doc.data())
//       })
//       setAnimals(result)
//     }
//     loadAnimals()
//   }, [animalQuery])
//   return animals
// }
