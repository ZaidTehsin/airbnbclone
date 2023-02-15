import React from 'react'

export default function Card() {
  return (
    <>
      <div className='card w-80 py-2 px-2 text-xl ml-7 mt-5'>
        <img className='katie-pic w-full' src={require('./Images/image 12.png')} alt="" />
        <div className='card-stats flex items-center pt-1'>
          <img className='h-5' src={require('./Images/Star 1-1.png')} alt="" />
          <span className='ml-1' >5.0</span>
          <span className='text-gray-500'>(6) . </span>
          <span className='text-gray-500'>USA</span>
        </div>


        <p className='py-1'>Life Lessons with Katie Zaferes</p>
        <p><b>From $137</b> / person</p>

      </div>

    </>
  )
}
