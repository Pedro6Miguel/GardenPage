import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'

import { Navbar2 } from '../../components/Navbar/Navbar2'

import HeroImg from '/images/Hero.png'

export const Login = () => {
  const navigate = useNavigate()

  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authUser, setAuthUser] = useState(null || Object)

  const signIn = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        setError(false)
    } catch(err) {
        setError(true)
    }
  }

  const logout = async () => {
    try {
        await signOut(auth)
    } catch(err) {
        console.error(err)
    }
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
  }

  return (
    <>
    <Navbar2 />
    <div className='pt-[100px] flex justify-start max-[790px]:pt-[160px] max-w-[2000px] m-auto'>
      <div className='w-[40%] max-[790px]:hidden'>
        <img className='ml-4 mt-4 mb-4 object-cover w-[100%] h-[800px]' src={HeroImg} alt="" />
      </div>
      <div className='flex flex-col justify-center w-[60%] mt-4 mb-4 pl-[60px] max-[790px]:w-[100%] max-[790px]:mt-0 max-[790px]:mb-0 max-[790px]:px-[80px]'>
        <h3 className='leading-10'>Welcome to Lush Garden, <br></br> Sign In to Continue.</h3>
        <p className='text-[16px] pt-4 pb-10'>Don't have an account? <span onClick={() => navigate('/signin')} className='cursor-pointer underline'>Create a account</span> <br></br>It takes less than a minute</p>
        <label htmlFor="" className='text-[13px] mb-2'>Email</label>
        <input 
            className='border-2 border-dark placeholder-dark text-dark h-[46px] rounded-[4px] mr-[220px] max-[1470px]:mr-[120px] max-[1100px]:mr-[80px] max-[790px]:mr-[0px]' 
            type="text" 
            placeholder='Enter your email' 
            onChange={(e) => setEmail(e.target.value)}    
        />
        <label htmlFor="" className='text-[13px] mb-2 mt-6'>Password</label>
        <input 
            className='border-2 border-dark placeholder-dark text-dark h-[46px] rounded-[4px] mr-[220px] max-[1470px]:mr-[120px] max-[1100px]:mr-[80px] max-[790px]:mr-[0px]' 
            type="password" 
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)} 
        />
        {authUser ? <button className='mt-14 bg-dark h-[46px] mr-[220px] max-[1470px]:mr-[120px] max-[1100px]:mr-[80px] text-white max-[790px]:mr-[0px]' onClick={userSignOut}>Logout</button> : <button className='mt-14 bg-dark h-[46px] mr-[220px] max-[1470px]:mr-[120px] max-[1100px]:mr-[80px] text-white max-[790px]:mr-[0px]' onClick={signIn}>Sign In</button> }
        {error && <span>Wrong mail or word</span>}
      </div>
    </div>
    </>
  )
}
