import React from 'react'

import Gallery1 from '/images/Gallery1.png'
import Gallery2 from '/images/Gallery2.png'
import Gallery3 from '/images/Gallery3.png'
import Gallery4 from '/images/Gallery4.png'
import Gallery5 from '/images/Gallery5.png'

export const Gallery = () => {
  return (
    <div className='my-[95px]'>
        <h2 className='text-green text-center mb-10'>Our Gallery View</h2>
        <div className='grid grid-cols-3 gap-4'>
            <img className='row-span-2 w-[100%] h-[666px] object-cover max-[980px]:h-[415px]' src={Gallery1} alt="" />
            <img className='w-[100%] h-[325px] object-cover max-[980px]:h-[200px]' src={Gallery2} alt="" />
            <img className='w-[100%] h-[325px] object-cover max-[980px]:h-[200px]' src={Gallery3} alt="" />
            <img className='w-[100%] h-[325px] object-cover max-[980px]:h-[200px]' src={Gallery4} alt="" />
            <img className='w-[100%] h-[325px] object-cover max-[980px]:h-[200px]' src={Gallery5} alt="" />
        </div>
    </div>
  )
}
