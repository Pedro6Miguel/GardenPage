import React from 'react'

import Logo from '../../../public/images/Logo.png'

export const Navbar = () => {
  return (
    <nav className='bg-dark pt-8 w-[100vw] h-[100px] absolute top-0 z-10 flex justify-between items-center px-[220px] max-[1470px]:px-[120px] max-[1100px]:px-[80px]'>
      <img className='h-[64px]' src={Logo} alt="" />
      <ul className='flex gap-8 items-center'>
        <li className='text-[18px] text-white'>About</li>
        <li className='text-[18px] text-white'>Planters</li>
        <li className='text-[18px] text-white'>Contact</li>
        <li className='text-[18px] text-white border-2 px-12 py-2 rounded-[4px]'>Call Us</li>
      </ul>
    </nav>
  )
}
