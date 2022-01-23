// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
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
const subscriptionRef = collection(db, 'subscription')

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
  subscriptionRef,
  onSnapshot,
  updateProfile,
  onAuthStateChanged,
}
