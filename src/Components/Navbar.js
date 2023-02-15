import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="nav bg-white border-1 border-slate-300 w-full h-auto max-w-5xl mt-10 py-5 px-10 flex justify-center items-center md:justify-start shadow-lg shadow-gray-200/100">
        <img className='logo w-20 md:w-32' src={require('./Images/airbnblogo.png')} alt='' />
      </div>

    </div>
  )
}
