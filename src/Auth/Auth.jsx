import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";

const auth = getAuth(app);
export const UserAuth = createContext(null);

const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const facebookIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const passReset = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }

    const updateUser = (loggedUser, name, photo) => {
        setLoading(true)
        return updateProfile(loggedUser, {
            displayName: name, photoURL: photo
        })
    }

    const userVerify = ()=>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            // if (currentUser) {
            //     // const email= currentUser.email;
            //     axios.post("http://localhost:5000/jwt", {
            //         email: currentUser.email
            //     }).then(data => {
            //         // console.log(data.data.token);
            //         localStorage.setItem("access-token", data.data.token)
            //         setLoading(false)
            //     })
            // } else {
            //     setLoading(false)
            //     localStorage.removeItem("access-token")
            // }
        })
        return () => unsubscribe();
    }, [])




    const userInfo = {
        user,
        loading,
        signUp,
        signIn,
        passReset,
        googleIn,
        facebookIn,
        updateUser,
        userVerify,
        logOut
    }
    return (
       <UserAuth.Provider value={userInfo}>
          {children}
       </UserAuth.Provider>
    );
};

export default Auth;