import React from 'react'
import { BLOG_DATA, BlogData } from './BlogData';
import { useNavigate } from "react-router-dom";

import Arrow from '/images/Arrow.png'
import DateIcon from '/images/DateIcon.png'

export const Blog = () => {
    const navigate = useNavigate();

    const scroll = () => {
        window.scrollTo(0,0)
      }
  
    return (
    <div className='my-[110px] mx-[220px] max-[1470px]:mx-[120px] max-[1100px]:mx-[80px] max-[1100px]:my-[70px]'>
        <h2 className='text-green capitalize text-center pb-10'>Interesting blog to read</h2>
        <div className='flex gap-16 max-[1120px]:gap-12 max-[1285px]:flex-col'>
            {BLOG_DATA.map((data, i) =>(
            <div onClick={() => {navigate(`/${data.id}`); scroll()}} className='cursor-pointer flex flex-col justify-between' key={data.id}>
                <img className='bg-green rounded-[10px] h-[300px] object-cover max-[1280px]:h-[240px]' src={data.image} alt="" />
                <h4 className='text-green pt-2 pb-2'>{data.title}</h4>
                <h5 className='text-dark pb-4'>{data.description}</h5>
                <div className='flex justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[18px] h-[18px]' src={DateIcon} alt="" />
                        <p className='text-[#121212a1] text-base'>{data.date}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-base text-green font-bold'>Read more</p>
                        <img className='w-[16px] h-[12px]' src={Arrow} alt="" />
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
