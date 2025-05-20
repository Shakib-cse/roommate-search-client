// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr6XVc0gUNfGs-mycgbQTqKFBfYPENRB8",
  authDomain: "roommate-search-cea35.firebaseapp.com",
  projectId: "roommate-search-cea35",
  storageBucket: "roommate-search-cea35.firebasestorage.app",
  messagingSenderId: "40459331333",
  appId: "1:40459331333:web:fe3e88a3aec8a9655e796c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;