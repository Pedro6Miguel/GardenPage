import React from 'react'

import ReviewPic1 from '../../../public/images/ReviewPic1.png'
import ReviewPic2 from '../../../public/images/ReviewPic2.png'
import ReviewPic3 from '../../../public/images/ReviewPic3.png'
import Zz_Plant from '../../../public/images/Zz_Plant.png'
import Zz_Bamboo from '../../../public/images/Zz_Bamboo.png'
import Zz_Snake from '../../../public/images/Zz_Snake.png'

export const Reviews = () => {
  return (
    <div className='my-[100px] mx-[220px] max-[1470px]:mx-[120px] max-[1100px]:mx-[80px] max-[1100px]:my-[70px]'>
        <h2 className='capitalize text-green text-center mb-10'>What do they say about us</h2>
        <div className='flex gap-16 max-[1120px]:gap-12 max-[1100px]:flex-col'>
            <div className='bg-[#F4F4F4] flex flex-col p-12 rounded-[10px]'>
                <img className='absolute right-0' src={Zz_Plant} alt="" />
                <div className='flex items-center gap-4'>
                    <img src={ReviewPic1} alt="" />
                    <h4>Jessica Watson</h4>
                </div>
                <p className='pt-4 pb-6'>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
            </div>
            <div className='bg-[#F4F4F4] flex flex-col p-12 rounded-[10px]'>
                <img className='absolute right-0' src={Zz_Plant} alt="" />
                <div className='flex items-center gap-4'>
                    <img src={ReviewPic2} alt="" />
                    <h4>Jessica Watson</h4>
                </div>
                <p className='pt-4 pb-6'>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
            </div>
            <div className='bg-[#F4F4F4] flex flex-col p-12 rounded-[10px]'>
                <img className='absolute right-0' src={Zz_Plant} alt="" />
                <div className='flex items-center gap-4'>
                    <img src={ReviewPic3} alt="" />
                    <h4>Jessica Watson</h4>
                </div>
                <p className='pt-4 pb-6'>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
            </div>
        </div>
    </div>
  )
}
