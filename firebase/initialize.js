// for env files
import env from "react-dotenv";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIRE_APIKEY,
  authDomain: env.NEXT_PUBLIC_FIRE_AUTHDOMAIN,
  projectId: env.NEXT_PUBLIC_FIRE_PROJECTID,
  storageBucket: env.NEXT_PUBLIC_FIRE_STORAGEBUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIRE_MESSAGINGSENDERID,
  appId: env.NEXT_PUBLIC_FIRE_APPID,
  measurementId: env.NEXT_PUBLIC_FIRE_ANALYTICS_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Google Analytic, Firebase Authentication, Firestore, and Storage
export let analytics;
if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
