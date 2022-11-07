import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase/firebase.config';


const auth = getAuth(app)

// create a context
export const AuthContext = createContext()


const AuthProvider = ({children}) => {

// ssignin with email and passsword

const createUserWithEmail = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const loginWithEmail = (email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}



    const authInfo = {createUserWithEmail,loginWithEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;