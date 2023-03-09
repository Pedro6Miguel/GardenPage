import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase/config'

import HeroImg from '/images/Hero.png'

export const Hero = () => {
  const [authUser, setAuthUser] = useState(null)

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
    <div>
        <img className='w-[100%] z-[-10] h-[758px] object-cover bg-bottom relative' src={HeroImg} alt="" />
        <div className='z-[1] absolute top-[36%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[700px]:top-[100%]' id='teste'>
            <h1 className='text-center text-white leading-tight max-[930px]:w-[80vw] max-[580px]:text-[48px] max-[418px]:text-[42px] max-[418px]:w-[90vw]'>Nature's Beauty Delivered to You</h1>
            <p className='text-center text-white pt-4 pb-8 max-[930px]:w-[80vw]'>Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!</p>
            <div className='flex gap-3 justify-center max-[430px]:flex-col w-[100%] z-40'>
                <button className='h-[46px] px-10 border-2 text-white bg-button border-button ease-linear duration-100 hover:border-white'>Book Now</button>
                <button className='h-[46px] px-10 border-2 text-white bg-button border-white ease-linear duration-100 hover:border-white hover:bg-[#dadcdc34]'>Watch Video</button>
            </div>
        </div>
        {authUser ? <><p>{`Signin as ${authUser.email}`}</p><button onClick={userSignOut}>Signout</button></> : <>Noooooooooop</>}
    </div>
  )
}
