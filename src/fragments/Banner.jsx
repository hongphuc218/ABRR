import React from 'react'
import Photo from '../photos/City.jpg'

const Banner = () => {
  return (
      <div className='relative h-screen w-full'>
        <img src={Photo} alt="" className='absolute h-screen object-cover'/>
        <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-light-green'>GROWING WITH ABBR</h1>
            <h1 className='text-beige md:text-6xl sm:text-4xl text-3xl font-bold md:py-6'>Grow with investment.</h1>
            <button className='bg-dark-green text-light-green w-[120px] md:w-[180px] mt-5 p-2 font-medium rounded-md md:text-xl sm:text-md text-sm'>Get Started</button>
        </div> 
      </div>
  )
}

export default Banner