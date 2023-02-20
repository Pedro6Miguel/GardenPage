import React from 'react'
import { BLOG_DATA, BlogData } from './BlogData';
import { useNavigate } from "react-router-dom";

export const Blog = () => {
    const navigate = useNavigate();
  return (
    <div >
        {BLOG_DATA.map((data, i) =>(
            <div onClick={() => {navigate(`/${data.id}`);}} key={data.id} className='flex flex-col items-center gap-[10px] cursor-pointer'>
                <p className='text-text font-normal text-center text-[34px]'>{data.name}</p>
            </div>
        ))}
    </div>
  )
}
