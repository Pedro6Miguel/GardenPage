import React from 'react'
import { Hero } from '../../sections/Hero/Hero'
import { About } from '../../sections/About/About'
import { ProductsInfo } from '../../sections/ProductsInfo/ProductsInfo'

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className='max-w-[2000px] m-auto'>
        <About />
      </div>
      <ProductsInfo />
    </div>
  )
}
