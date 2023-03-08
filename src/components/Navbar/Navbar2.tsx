import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import Logo from '/images/Logo.png'

export const Navbar2 = () => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 2) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const valueOverflow = open ? 'hidden' : '';
  document.body.style.overflow = valueOverflow;

  return (
    <div className={open ? 'overflow-hidden sticky top-0 z-[20]' : 'sticky top-0 z-[20]'}>
    <nav className={navbar ? 'bg-button active shadow absolute w-[100%] h-[100px] flex justify-between items-center px-[220px] max-[1470px]:px-[120px] max-[1100px]:px-[80px]' :  'bg-button absolute w-[100%] h-[100px] flex justify-between items-center px-[220px] max-[1470px]:px-[120px] max-[1100px]:px-[80px]'}>
    <img onClick={() => navigate('/')} className='h-[64px] cursor-pointer' src={Logo} alt="" />
      <ul className='flex gap-8 items-center max-[880px]:hidden'>
        <li className='cursor-pointer text-[18px] text-white'>About</li>
        <li className='cursor-pointer text-[18px] text-white'>Planters</li>
        <li className='cursor-pointer text-[18px] text-white'>Contact</li>
        <li onClick={() => navigate('/login')} className='cursor-pointer text-[18px] text-white border-2 px-12 py-2 rounded-[4px]'>Login</li>
      </ul>
      <label className='min-[880px]:hidden' htmlFor="check">
        <input onClick={() => {setOpen(!open)}}  type="checkbox" id="check"/> 
        <span></span>
        <span></span>
        <span></span>
    </label>
    </nav>
    { open ? <div className='bg-button w-[100%] h-[100vh] flex justify-center items-center'>
      <ul className='flex gap-12 items-center flex-col'>
        <li className='text-white text-[36px] font-semibold uppercase tracking-[6px]'>About</li>
        <li className='text-white text-[36px] font-semibold uppercase tracking-[6px]'>Planters</li>
        <li className='text-white text-[36px] font-semibold uppercase tracking-[6px]'>Contact</li>
        <li className='text-white text-[36px] font-semibold uppercase tracking-[6px]'>Call Us</li>
      </ul>
    </div>
    : ''
    }
    </div>
  )
}
