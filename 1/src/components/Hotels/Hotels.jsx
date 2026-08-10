import React from 'react'
import { HOTELS } from '../../data/hotel'
import { CiLocationOn } from 'react-icons/ci'
import StarsComponent from '../Helpers/StarsComponent'

const Hotels = () => {
  return (
    <div className='container mx-auto px-3 py-10'>
      <h2 className='text-2xl font-bold text-[#161414]'>Hotels and Restaurants</h2>
      <div className='mt-12 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            HOTELS.map((item,index)=>(
                <div key={item.id}>
                    <div className='sm:h-95 h-60  rounded-3xl overflow-hidden'>
                        <img src={item.image} alt={item.name} className='h-full w-full object-cover object-center' />                     
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-lg text-[#161414] font-medium'>{item.name}</h3>
                        <div className='mt-1 flex items-center justify-between'>
                            <p className='flex items-center gap-1 text-sm text-[#979797]'>
                                <CiLocationOn/>
                                {item.location}
                            </p>
                            <StarsComponent rating={item.rating} />
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Hotels
