import React from 'react'
import {DESTINATIONS} from '../../data/destination'

const Popular = () => {
  return (
    <div>
      <h2>Popular Destinations</h2>
      <div>
        {
            DESTINATIONS.map((item,index)=>(
                <div key={item.id}>
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Popular
