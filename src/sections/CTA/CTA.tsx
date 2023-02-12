import React from 'react'

export const CTA = () => {
  return (
    <div className='cta bg-dark h-[400px] flex items-center justify-center'>
        <div className='flex border-2 border-green gap-16 max-w-[1100px] max-[1300px]:max-w-[100%] max-[1300px]:mx-[120px] max-[1100px]:mx-[80px] max-[900px]:flex-col max-[900px]:gap-6'>
            <h3 className='text-white capitalize'>Enter your email address for our mailing Promo or other interesting things</h3>
            <div className='flex items-center gap-4'>
                <input className='w-[420px] h-[46px] z-10 bg-transparent border-[#D9D9D9] border-2 rounded-[4px] max-[1230px]:w-[260px] max-[900px]:w-[100%]' type="text" placeholder='Enter your email'/>
                <button className='w-[138px] h-[46px] bg-green text-white font-medium'>Submit</button>
            </div>
        </div>
    </div>
  )
}
