import React from 'react'

import IndoorPlant from '/images/Indoor_Plant.png'
import OutdoorPlant from '/images/Outdoor_Plant.png'
import Bamboo from '/images/Bamboo.png'

export const About = () => {
  return (
    <div className='my-[110px] mx-[220px] max-[1470px]:mx-[120px] max-[1100px]:mx-[80px] max-[1100px]:my-[70px]'>
      <div className='flex justify-between gap-[60px] max-[1270px]:flex-col max-[1270px]:gap-[0]'>
        <h2 className='text-green w-[30%] capitalize max-[1270px]:w-[100%]'>We Help choose the most suitable plants for you</h2>
        <p className='w-[70%] pt-4 max-[1270px]:w-[100%]'>Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
      </div>

      <div className='flex gap-16 mt-[70px] max-[1120px]:gap-12 max-[1100px]:flex-col'>
        <div className='border-2 border-green px-12 py-8 rounded-[10px] basis-1/3'>
          <img src={IndoorPlant} alt="" />
          <h4 className='text-green pt-4 pb-3'>Indoor Plants</h4>
          <h5>Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants</h5>
        </div>
        <div className='bg-green border-2 border-green px-12 py-8 rounded-[10px] basis-1/3'>
          <img src={OutdoorPlant} alt="" />
          <h4 className='text-white pt-4 pb-3'>Outdoor Plants</h4>
          <h5 className='text-white'>Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.</h5>
        </div>
        <div className='border-2 border-green px-12 py-8 rounded-[10px] basis-1/3'>
          <img src={Bamboo} alt="" />
          <h4 className='text-green pt-4 pb-3'>Plants Pots</h4>
          <h5>Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor</h5>
        </div>
      </div>
    </div>
  )
}
