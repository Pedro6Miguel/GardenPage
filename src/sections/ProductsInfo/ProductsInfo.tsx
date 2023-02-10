import React from 'react'

import ProductsImg from '../../../public/images/ProductsImg.png'
import TimeConsuming from '../../../public/images/TimeConsuming.png'
import Grow from '../../../public/images/Grow.png'
import Temperature from '../../../public/images/Temperature.png'
import Pruning from '../../../public/images/Pruning.png'

export const ProductsInfo = () => {
  return (
    <div className='flex h-[800px]'>
        <img className='basis-1/2 object-cover' src={ProductsImg} alt="" />
        <div className='basis-1/2 grid grid-cols-2 bg-[#F8F8F8] max-[1320px]:grid-cols-1'>
            <div className='p-16 max-[1400px]:p-8 border-2 max-[1320px]'>
                <div className='bg-dark flex flex-col max-[1320px]:flex-row max-[1320px]:items-center'>
                    <img className='w-[126px] max-[1320px]:w-[40px]' src={TimeConsuming} alt="" />
                    <h4>Quality Product</h4>
                </div>
                <h5>Our flowers are of the highest quality, carefully selected and sourced from reputable</h5>
            </div>
            <div className='p-16 max-[1400px]:p-8 border-2 max-[1320px]'>
                <div className='bg-dark flex flex-col max-[1320px]:flex-row max-[1320px]:items-center'>
                    <img className='w-[126px] max-[1320px]:w-[40px]' src={TimeConsuming} alt="" />
                    <h4>Quality Product</h4>
                </div>
                <h5>Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.</h5>
            </div>
            <div className='p-16 max-[1400px]:p-8 border-2 max-[1320px]'>
                <div className='bg-dark flex flex-col max-[1320px]:flex-row max-[1320px]:items-center'>
                    <img className='w-[126px] max-[1320px]:w-[40px]' src={TimeConsuming} alt="" />
                    <h4>Quality Product</h4>
                </div>
                <h5>We work smart, using innovative techniques and technology to streamline our processes</h5>
            </div>
            <div className='p-16 max-[1400px]:p-8 border-2 max-[1320px]'>
                <div className='bg-dark flex flex-col max-[1320px]:flex-row max-[1320px]:items-center'>
                    <img className='w-[126px] max-[1320px]:w-[40px]' src={TimeConsuming} alt="" />
                    <h4>Quality Product</h4>
                </div>
                <h5>We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs</h5>
            </div>
        </div>
    </div>
  )
}
