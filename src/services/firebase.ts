import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC7OGzk50MCR8IOYSKLVUowo-NZ00MqCow",
  authDomain: "kawaii-friend-82382.firebaseapp.com",
  projectId: "kawaii-friend-82382",
  storageBucket: "kawaii-friend-82382.firebasestorage.app",
  messagingSenderId: "928734604946",
  appId: "1:928734604946:web:cc158b10b9f8c01bef404b"
};

const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db };
