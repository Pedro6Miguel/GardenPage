import React from 'react'
import { useParams } from 'react-router-dom'
import { BLOG_DATA, BlogData } from './BlogData';

export const PostDetails = () => {
  const {id} = useParams()

  return (
    <div className='pt-32'>
        <h1>{BLOG_DATA[id].name}</h1>
    </div>
  )
}
