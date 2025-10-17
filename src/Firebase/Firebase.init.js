
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZpyk0skfvGMUOZm2OgqvwlUL9M_IwpP4",
  authDomain: "b12-freedom-fighter.firebaseapp.com",
  projectId: "b12-freedom-fighter",
  storageBucket: "b12-freedom-fighter.firebasestorage.app",
  messagingSenderId: "717238237225",
  appId: "1:717238237225:web:d3a9420338ecb0877a4438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);