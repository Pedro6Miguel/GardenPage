import React from 'react'
import { useParams } from 'react-router-dom'
import { BLOG_DATA, BlogData } from './BlogData';

type PostInterface = {
  id: any;
}

export const PostDetails = () => {
  const {id} = useParams<PostInterface>()

  return (
    <div className='relative my-[110px] mx-[220px] max-[1470px]:mx-[120px] max-[1100px]:mx-[80px] max-[1100px]:my-[70px]'>
      <p className='mt-[160px] mb-[10px] text-center font-medium text-[#8F8F8F]'>News</p>
      <h2 className='text-green text-center text-[42px]'>{BLOG_DATA[id].title}</h2>
      <p className='text-center'>{BLOG_DATA[id].description}</p>
      <img className='my-[40px] w-[100%] h-[400px] object-cover' src={BLOG_DATA[id].image} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo blanditiis maxime quaerat amet ratione, et, nesciunt dolor odit eveniet harum cum odio optio nemo voluptatum quo labore. Quo, in. Cum.
      Deserunt excepturi perspiciatis tempora. Esse consequuntur officia sunt nulla ex libero numquam enim, eaque error animi recusandae perspiciatis doloremque, inventore placeat? Ab excepturi id itaque eius mollitia libero eaque ipsa!
      Officiis esse ab, eos fugit atque saepe assumenda laboriosam aliquam dolorem molestias voluptatibus inventore asperiores quam cumque minima eius? Porro, id. Tempore iste necessitatibus laboriosam porro reprehenderit culpa asperiores eaque.
      Non tempore eos illo necessitatibus, dolorem, eveniet dolore, molestiae facere possimus rem atque ipsam aspernatur? Distinctio sint dicta ex, qui adipisci non, dolore, alias accusantium architecto inventore id dolorum! Itaque.
      Sint officiis numquam, tempora cumque veritatis sit iure corporis exercitationem explicabo sequi blanditiis rerum reprehenderit mollitia dolore ut aliquam quaerat corrupti suscipit! Velit est modi autem exercitationem nam excepturi quia.
      Nulla nam eveniet dolor deserunt accusantium, voluptatibus incidunt, ipsam possimus soluta rerum aspernatur magni adipisci nihil hic quas quasi reiciendis! Eligendi vel fuga dolorem, ullam facere qui temporibus maxime alias.
      Assumenda delectus, animi officiis sint quas culpa. Eum harum exercitationem maiores velit veniam doloribus placeat, provident est et dolore. Perspiciatis necessitatibus eligendi ut repudiandae eaque earum deleniti nisi saepe accusantium?
      Adipisci itaque perspiciatis libero? Autem odio ipsa soluta delectus perferendis itaque fuga possimus sequi, mollitia asperiores saepe dolor iusto blanditiis similique deserunt molestiae, tenetur minima! Error, perferendis. Illum, voluptates possimus.
      Eligendi corrupti error voluptatibus molestiae accusantium ullam molestias obcaecati, soluta vel saepe laboriosam officiis perferendis maiores doloribus assumenda dolor voluptas facere. Et nostrum temporibus minima, earum quod fuga ut ipsam.
      Facilis doloremque accusantium veniam. Inventore, ipsam magnam quia sequi veniam in nemo impedit eligendi nostrum voluptate fuga quae asperiores optio error molestias vel cum, placeat dolorum! Reiciendis quod in quo.</p>
    </div>
  )
}