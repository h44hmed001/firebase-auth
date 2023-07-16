"use client"
import { signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { createContext,useEffect,useState } from "react";
import {auth} from "../firebase/firebase"
export const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    const signInGoogle=()=>{
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }
    const logOut=()=>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unsubscribe()

    },[user])
    return (
        <AuthContext.Provider value={{user,signInGoogle,logOut}}>
            {children }
        </AuthContext.Provider>
    )
}