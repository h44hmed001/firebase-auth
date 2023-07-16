import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjlO5WK9cKskgl-bPJCeFKQJpvsF1F8eM",
  authDomain: "nextjs-auth-project-fd3a9.firebaseapp.com",
  projectId: "nextjs-auth-project-fd3a9",
  storageBucket: "nextjs-auth-project-fd3a9.appspot.com",
  messagingSenderId: "361064428391",
  appId: "1:361064428391:web:98991af24def73d29835c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
