import React from 'react'

export default function Contact(props) {
  return (
    <>
      <div className='card w-80 py-2 px-2 text-xl ml-7 mt-5'>
        <img className='katie-pic w-full' src={props.img} alt="" />
        <div className='card-stats flex items-center pt-1'>
          <img className='h-5' src={require('./Images/Star 1-1.png')} alt="" />
          <span className='ml-1' >{props.rating}</span>
          <span className='text-gray-500'>(6) . </span>
          <span className='text-gray-500'>USA</span>
        </div>


        <p className='py-1'>{props.firstline}</p>
        <p><b>{props.secondline}</b> / person</p>

      </div>
    </>
  )
}
