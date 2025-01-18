import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, getReactNativePersistence, initializeAuth  } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyCTW2-35k7c4q3MRSGsmWpn1YAa_c0oMnw",
  authDomain: "nspire-live.firebaseapp.com",
  databaseURL: "https://nspire-live-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nspire-live",
  storageBucket: "nspire-live.appspot.com",
  messagingSenderId: "776584037297",
  appId: "1:776584037297:web:195191391e3dc4c3143390",
  measurementId: "G-TQ4W7TZ8XS"
};

const app = initializeApp(firebaseConfig);
const auth2 = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)