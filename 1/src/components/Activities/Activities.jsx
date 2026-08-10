import React from "react";
import { ACTIVITIES } from "../../data/activities";
import { FaArrowRight } from "react-icons/fa";

const Activities = () => {
  return (
    <div className="container mx-auto px-3 py-10">
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold text-[#161414]'>Activites</h2>
        <button className="p-2.5 flex items-center border border-[#7B61FF] rounded-xl text-[#7B61FF] gap-1 bg-[#F6F4FF] cursor-pointer">View all <FaArrowRight/></button>
      </div>
      <div className='mt-12 grid grid-cols-4 gap-8'>
        {ACTIVITIES.map((item, index) => (
          <div key={item.id}>
            <div className='max-h-95 h-full rounded-3xl overflow-hidden'>
              <img src={item.image} alt={item.name}  className='h-full w-full object-cover object-center'/>
            </div>
            <h3 className="mt-3 text-lg text-[#161414] font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
