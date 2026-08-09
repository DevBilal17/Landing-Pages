import React from 'react'
import { ACTIVITIES } from '../../data/activities'

const Activities = () => {
  return (
    <div>
         <div>
        <h2>Travel Tips and Advice</h2>
        <button>View all</button>
      </div>
      <div>
        {
            ACTIVITIES.map((item,index)=>(
                <div key={item.id}>
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <h3>{item.name}</h3>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Activities
