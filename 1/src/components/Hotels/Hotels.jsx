import React from 'react'
import { HOTELS } from '../../data/hotel'
import { CiLocationOn } from 'react-icons/ci'
import StarsComponent from '../Helpers/StarsComponent'

const Hotels = () => {
  return (
    <div className='container mx-auto px-3 py-10'>
      <h2 className='text-2xl font-bold text-[#161414]'>Hotels and Restaurants</h2>
      <div className='mt-12 flex gap-8'>
        {
            HOTELS.map((item,index)=>(
                <div key={item.id}>
                    <div>
                        <img src={item.image} alt={item.name} />                     
                    </div>
                    <div>
                        <h3>{item.name}</h3>
                        <div>
                            <p>
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
