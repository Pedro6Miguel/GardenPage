import React from 'react'

import Gallery1 from '../../../public/images/Gallery1.png'
import Gallery2 from '../../../public/images/Gallery2.png'
import Gallery3 from '../../../public/images/Gallery3.png'
import Gallery4 from '../../../public/images/Gallery4.png'
import Gallery5 from '../../../public/images/Gallery5.png'

export const Gallery = () => {
  return (
    <div className='my-[110px]'>
        <h2 className='text-green text-center mb-6'>Our Gallery View</h2>
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
