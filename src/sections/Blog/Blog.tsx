import React from 'react'
import { BLOG_DATA, BlogData } from './BlogData';
import { useNavigate } from "react-router-dom";

import Arrow from '../../../public/images/Arrow.png'
import DateIcon from '../../../public/images/DateIcon.png'

export const Blog = () => {
    const navigate = useNavigate();
  
    return (
    <div className='my-[110px] mx-[220px] max-[1470px]:mx-[120px] max-[1100px]:mx-[80px] max-[1100px]:my-[70px]'>
        {/*{BLOG_DATA.map((data, i) =>(
            <div onClick={() => {navigate(`/${data.id}`);}} key={data.id} className='flex flex-col items-center gap-[10px] cursor-pointer'>
                <p className='text-text font-normal text-center text-[34px]'>{data.title}</p>
            </div>
        ))}*/}
        <h2 className='text-green capitalize text-center'>Interesting blog to read</h2>
        <div>
            <img src="https://media.discordapp.net/attachments/905837522813337613/1077060272541405355/Post3.png" alt="" />
            <h4>The benefits of plants in your room</h4>
            <h5>Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....</h5>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-[18px] h-[18px]' src={DateIcon} alt="" />
                    <p className='text-[#121212a1] text-base'>January 20, 2023</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-base text-green font-bold'>Read more</p>
                    <img className='w-[16px] h-[12px]' src={Arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
