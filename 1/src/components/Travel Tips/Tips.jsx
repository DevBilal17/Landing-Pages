import React from 'react'
import { TIPS } from '../../data/tips'
import { RiCalendar2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
const Tips = () => {
  return (
    <div  className='container mx-auto px-3 py-10'>
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold text-[#161414]'>Travel Tips and Advice</h2>
        <button>View all</button>
      </div>

      <div className='mt-12 grid grid-cols-2 gap-8'>
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
