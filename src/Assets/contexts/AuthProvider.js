import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';


const auth = getAuth(app)

// create a context
export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [loading,setLoading]= useState(true)
    const [user,setUser]=useState(null)

// ssignin with email and passsword

const createUserWithEmail = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const loginWithEmail = (email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}

const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
}

// logout

const logout = ()=>{
    return signOut(auth);
}


// state ovserver

// state observer
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        


            setUser(currentUser);
        
      setLoading(false)
    });

    return () => {
        unsubscribe();
        
    }

}, [])


    const authInfo = {createUserWithEmail,loginWithEmail,loading,user,logout,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;