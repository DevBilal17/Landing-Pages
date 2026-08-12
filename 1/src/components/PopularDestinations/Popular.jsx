import React from 'react'
import {DESTINATIONS} from '../../data/destination'

const Popular = () => {
  return (
    <div className='container mx-auto px-3 py-10'>
      <h2 className='text-2xl font-bold text-[#161414]'>Popular Destinations</h2>
      <div className='mt-12 grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-8'>
        {
            DESTINATIONS.map((item,index)=>(
                <div key={item.id} className='flex flex-col gap-3 w-full'>
                    <div className='w-full h-[180px] rounded-3xl overflow-hidden'>
                        <img src={item.image} alt={item.name} className='w-full h-full object-cover object-center transform transition duration-150 hover:scale-105' />
                    </div>
                    <div>
                      <h3 className='text-[#161414] text-lg'>{item.name}</h3>
                    <p className='text-sm text-[#979797]'>{item.location}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Popular
