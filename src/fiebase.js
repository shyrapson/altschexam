// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyATooruHDBYxFjt0zYctlUFU09mFPwqeQ0",
  authDomain: "altschool-ac175.firebaseapp.com",
  projectId: "altschool-ac175",
  storageBucket: "altschool-ac175.appspot.com",
  messagingSenderId: "465604333556",
  appId: "1:465604333556:web:e893dc7d84c6d0925df3a1",
  measurementId: "G-MVPR84FZD0"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signUpWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{

      const name = result.user.displayName;
      const email = result.user.email;
      const profile = result.user.photoURL
      ;
      console.log(profile,'rrrrrr')
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profile", profile);
}
)
.catch((error) => {
  console.log(error);
});

}
