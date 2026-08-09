import React from 'react'
import { HOTELS } from '../../data/hotel'
import { CiLocationOn } from 'react-icons/ci'
import StarsComponent from '../Helpers/StarsComponent'

const Hotels = () => {
  return (
    <div>
      <h2>Popular Destinations</h2>
      <div>
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
