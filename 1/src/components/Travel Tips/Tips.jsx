import React from "react";
import { TIPS } from "../../data/tips";
import { RiCalendar2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { FaArrowRight, FaRegComment } from "react-icons/fa";
const Tips = () => {
  return (
    <div className="container mx-auto px-3 py-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-[#161414]">
          Travel Tips and Advice
        </h2>
        <button className="p-2.5 flex items-center border border-[#7B61FF] rounded-xl text-[#7B61FF] gap-1 bg-[#F6F4FF] cursor-pointer">View all <FaArrowRight/></button>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8">
        {TIPS.map((item, index) => (
          <div key={item.id} className="flex gap-8">
            <div className="h-95 w-79 shrink-0 rounded-3xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-between">
            <div>
                  <h3 className="text-xl text-[#161414] font-bold">{item.title}</h3>
              <p className="mt-4 text-[#979797]">{item.desc}</p>

            </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-1 text-sm text-[#979797]">
                  <RiCalendar2Line />
                  {item.date}
                </div>
                <div className="flex items-center gap-1 text-sm text-[#979797]">
                  <RiUserLine />
                  {item.author}
                </div>
                <div className="flex items-center gap-1 text-sm text-[#979797]">
                  <FaRegComment />
                  {item.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
