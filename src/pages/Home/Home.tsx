import React from 'react'
import { Hero } from '../../sections/Hero/Hero'
import { About } from '../../sections/About/About'
import { ProductsInfo } from '../../sections/ProductsInfo/ProductsInfo'
import { Gallery } from '../../sections/Gallery/Gallery'
import { Reviews } from '../../sections/Reviews/Reviews'
import { CTA } from '../../sections/CTA/CTA'
import { Blog } from '../../sections/Blog/Blog'

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className='max-w-[2000px] m-auto'>
        <About />
      </div>
      <ProductsInfo />
      <Gallery />
      <div className='max-w-[2000px] m-auto'>
        <Reviews />
      </div>
      <CTA />
      <Blog />
    </div>
  )
}
