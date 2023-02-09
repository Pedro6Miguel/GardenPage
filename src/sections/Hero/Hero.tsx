import React from 'react'

import HeroImg from '../../../public/images/Hero.png'

export const Hero = () => {
  return (
    <div>
        <img className='w-[100%] h-[758px] object-cover relative bg-bottom' src={HeroImg} alt="" />
        <div className='absolute top-[350px] left-[50%] translate-x-[-50%] translate-y-[-50%] max-[436px]:top-[380px]'>
            <h1 className='text-center text-white line leading-tight max-[930px]:w-[80vw] max-[580px]:text-[48px] max-[418px]:text-[42px] max-[418px]:w-[90vw]'>Nature's Beauty Delivered to You</h1>
            <p className='text-center text-white pt-2 pb-6'>Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!</p>
            <div className='flex gap-3 justify-center max-[430px]:flex-col w-[100%]'>
                <button className='h-[46px] px-10 border-2 text-white bg-button border-button ease-linear duration-100 hover:border-white'>Book Now</button>
                <button className='h-[46px] px-10 border-2 text-white bg-button border-white ease-linear duration-100 hover:border-white hover:bg-[#dadcdc34]'>Watch Video</button>
            </div>
        </div>
    </div>
  )
}
