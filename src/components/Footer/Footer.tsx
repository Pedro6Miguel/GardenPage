import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-green flex flex-col items-center py-16 text-white px-[220px] max-[1470px]:px-[120px] max-[1100px]:px-[80px]'>
      <h3 className='pb-4'>Seasoned. Nimble. Remote.</h3>
      <p className='text-[#e5e5e5] w-[60%] max-[960px]:w-[90%] max-[550px]:w-[100%]'>We're a diverse and passionate team that takes the nature in its unique form to bring you the best of it. We stay light on our feet and truly enjoy delivering great work.</p>
      <div className='h-[1px] w-[100%] my-14 bg-[#153526] mx-[220px] max-[1470px]:mx-[120px] max-[1100px]:mx-[80px]'></div>
      <div className='flex justify-between w-[100%] flex-wrap gap-5'>
        <div>
          <p className='font-semibold pb-2'>Navigation</p>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Home</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>About Us</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>What We Do</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Donate</li>
        </div>
        <div>
          <p className='font-semibold pb-2'>What We Do</p>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Encouraging Testing</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Sharing Information</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Building Leadership</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Shining a Light</li>
        </div>
        <div>
          <p className='font-semibold pb-2'>Legal</p>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>General Info</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Privacy Policy Us</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Terms of Service</li>
        </div>
        <div>
          <p className='font-semibold pb-2'>Talk To Us</p>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>support@lush.com</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>+66 2399 1145</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Facebook</li>
          <li className='text-[#e5e5e5] hover:text-white cursor-pointer'>Linkedin</li>
        </div>
      </div>
    </div>
  )
}
