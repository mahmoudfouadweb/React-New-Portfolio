// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDs6BvR6ugGRbwKsVMk27zEIIvQIC4C-90',
  authDomain: 'react-portfolio-dashboar-2eebb.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-2eebb',
  storageBucket: 'react-portfolio-dashboar-2eebb.appspot.com',
  messagingSenderId: '129158668966',
  appId: '1:129158668966:web:c4573143032f1915798a67',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
