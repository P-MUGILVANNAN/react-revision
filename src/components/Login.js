import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import React from 'react'
import app from "./firebase.config"

function Login() {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleLogin=()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
         
          const user = result.user;
          window.location.replace("/");
          
        }).catch((error) => {
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login