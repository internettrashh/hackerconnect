import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARK6TUExLYSo_XlsW2OrF_QYN3knoK7J4",
  authDomain: "gitwise-4154d.firebaseapp.com",
  projectId: "gitwise-4154d",
  storageBucket: "gitwise-4154d.appspot.com",
  messagingSenderId: "147026654129",
  appId: "1:147026654129:web:05ea15c532ce1ff632c390",
  measurementId: "G-620H83KP4W"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();

// Initialize Github Auth Provider
const provider = new GithubAuthProvider();

export { auth, provider };