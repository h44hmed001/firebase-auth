"use client"
import React from 'react'
import styles from "./page.module.css"
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const Profile = () => {
  const {user}=useContext(AuthContext)
  return (
    <>
    {!user?(<div className={styles.profileContainer}>
      Protected Route - You must be logged in to view this page
    </div>):<div className={styles.profileContainer}>
      Welcome {user.displayName}, You are logged in!
      </div>}
    </>
  )
}

export default Profile
