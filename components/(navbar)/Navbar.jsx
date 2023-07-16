import React, { useContext } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { AuthContext } from '@/context/AuthContext'
const Navbar = () => {
  const {user,signInGoogle,logOut}=useContext(AuthContext)
  const handleSignIn=async()=>{
    try{
      await signInGoogle()
    }
    catch(error){
      console.log(error)
    }
  }
  const handleSignOut=async()=>{
    try{
      await logOut()
    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
    <div className={styles.container}>
      <ul className={styles.listOne}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        {user?<li><Link href="/profile">Profile</Link></li>:<span></span>}
      </ul>
      {!user?(<ul className={styles.listTwo}>
        <li className={styles.signIn} onClick={handleSignIn}>Login</li>
        
      </ul>):(<>
      <ul className={styles.listTwo}>
      <li>Welcome {user.displayName.split(" ")[0]} {" "}</li>
      <li onClick={handleSignOut} className={styles.signUp}>{"- "}LogOut</li>
      </ul>
      </>)}
      
    </div>
  )
}

export default Navbar
