import React, { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(auth?.currentUser?.email)

  const signIn = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch(err) {
        console.error(err)
    }
  }

  const logout = async () => {
    try {
        await signOut(auth)
    } catch(err) {
        console.error(err)
    }
  }

  return (
    <div>
        <h1>Login</h1>
        <input 
            className='border-2 border-dark placeholder-dark text-green' 
            type="text" 
            placeholder='Enter your email' 
            onChange={(e) => setEmail(e.target.value)}    
        />
        <input 
            className='border-2 border-dark placeholder-dark text-green' 
            type="password" 
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={signIn}>Sign In</button>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
