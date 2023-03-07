import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'

import HeroImg from '/images/Hero.png'
import { Navbar2 } from '../../components/Navbar/Navbar2'

export const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(auth?.currentUser?.email)

  const signIn = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
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
    <>
    <Navbar2 />
    <div className='pt-[100px] flex justify-start max-[790px]:pt-[160px]'>
      <div className='w-[40%] max-[790px]:hidden'>
        <img className='ml-4 mt-4 mb-4 object-cover w-[100%] h-[800px]' src={HeroImg} alt="" />
      </div>
      <div className='flex flex-col justify-center w-[60%] mt-4 mb-4 pl-[60px] max-[790px]:w-[100%] max-[790px]:mt-0 max-[790px]:mb-0 max-[790px]:px-[80px]'>
        <h3 className='leading-10'>Welcome to Lush Garden, <br></br> Register to Continue.</h3>
        <label htmlFor="" className='mt-6 pt-4 text-[13px] mb-2'>Email</label>
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
        <button className='mt-14 bg-dark h-[46px] mr-[220px] max-[1470px]:mr-[120px] max-[1100px]:mr-[80px] text-white max-[790px]:mr-[0px]' onClick={signIn}>Sign In</button>
        <button className='mt-2 bg-dark h-[46px] mr-[220px] max-[1470px]:mr-[120px] max-[1100px]:mr-[80px] text-white max-[790px]:mr-[0px]' onClick={logout}>Logout</button>
      </div>
    </div>
    </>
  )
}
