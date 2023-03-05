import React from 'react'

import ReviewPic1 from '/images/ReviewPic1.png'
import ReviewPic2 from '/images/ReviewPic2.png'
import ReviewPic3 from '/images/ReviewPic3.png'

export const Reviews = () => {
  return (
    <div className='my-[100px] mx-[220px] max-[1470px]:mx-[120px] max-[1100px]:mx-[80px] max-[1100px]:my-[70px]'>
        <h2 className='capitalize text-green text-center mb-10'>What do they say about us</h2>
        <div className='flex gap-16 max-[1120px]:gap-12 max-[1100px]:flex-col'>
            <div className='bg-[#F4F4F4] flex flex-col p-12 rounded-[10px]'>
                <div className='flex items-center gap-4'>
                    <img src={ReviewPic1} alt="" />
                    <h4>Jessica Watson</h4>
                </div>
                <p className='pt-4 pb-6'>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
            </div>
            <div className='bg-[#F4F4F4] flex flex-col p-12 rounded-[10px]'>
                <div className='flex items-center gap-4'>
                    <img src={ReviewPic2} alt="" />
                    <h4>Jessica Watson</h4>
                </div>
                <p className='pt-4 pb-6'>“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</p>
            </div>
            <div className='bg-[#F4F4F4] flex flex-col p-12 rounded-[10px]'>
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
