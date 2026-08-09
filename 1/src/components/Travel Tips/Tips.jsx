import React from 'react'
import { TIPS } from '../../data/tips'
import { RiCalendar2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
const Tips = () => {
  return (
    <div>
      <div>
        <h2>Travel Tips and Advice</h2>
        <button>View all</button>
      </div>

      <div>
        {
            TIPS.map((item,index)=>(
                <div key={item.id}>
                    <div>
                     <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>

                        <div>
                            <div>
                                <RiCalendar2Line/>
                                {item.date}
                            </div>
                            <div>
                                <RiUserLine/>
                                {item.author}
                            </div>
                            <div>
                                <FaRegComment/>
                                {item.comments}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Tips
