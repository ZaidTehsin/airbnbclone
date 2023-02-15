import React from 'react'

export default function Hero() {
    return (
        <>

            <div>
                <img className='heroimage pt-5 pl-5 md:pl-20' src={require('./Images/group.png')} alt='' />
            </div>

            <div className='py-2'>
            <h1 className='font-bold text-3xl md:font-bold md:text-7xl pl-10 pt-10'>Online Experiences</h1>
            <p className='pl-10 pt-4 md:text-2xl max-w-sm md:max-w-lg'>Join unique interactive activities led by one-of-a-king hosts-all without leaving home.</p>
            </div>
        </>
    )
}
