import React from "react";
import { ACTIVITIES } from "../../data/activities";

const Activities = () => {
  return (
    <div className="container mx-auto px-3 py-10">
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold text-[#161414]'>Travel Tips and Advice</h2>
        <button>View all</button>
      </div>
      <div className='mt-12 flex gap-8'>
        {ACTIVITIES.map((item, index) => (
          <div key={item.id}>
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
