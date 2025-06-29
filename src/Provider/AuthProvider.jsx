import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import app from '../Firebase/firebase.config';


const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //sing up
    const createSingIn = (email, password) => {
        setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

//updateProfile
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

//sign in
const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}


  //sendPasswordResetEmail
  const resetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  }


//google sing in
const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
}

//state
useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
    return () => unsubscribed();
},[]);




//Logout
  //logout
  const logout = () => {
    return signOut(auth);
  };


const authData = {
    createSingIn,
    loading,
    user,
    setUser,
    singIn,
    logout,
    resetEmail,
    googleLogin,
    updateUser
}
return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;