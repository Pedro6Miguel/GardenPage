import React from 'react'
import { Hero } from '../../sections/Hero/Hero'
import { About } from '../../sections/About/About'
import { ProductsInfo } from '../../sections/ProductsInfo/ProductsInfo'
import { Gallery } from '../../sections/Gallery/Gallery'

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className='max-w-[2000px] m-auto'>
        <About />
      </div>
      <ProductsInfo />
      <Gallery />
    </div>
  )
}
