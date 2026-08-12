import React from 'react'
import heroImg from "../../assets/hero.png" 
import { CiGlobe } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoMdBicycle } from "react-icons/io";
import { RiCalendarEventFill } from "react-icons/ri";
import { LuUsersRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
const Hero = () => {
  return (
    <div 
    style={{ backgroundImage: `url(${heroImg})` }}
    className={`w-full min-h-screen bg-cover bg-center py-8 pb-16 `} >
        <div className='min-h-133.5 h-full  text-white flex items-center justify-center flex-col gap-7'>
            <h1 className='text-[clamp(48px,5vw,64px)] font-medium text-center'>Discover the most engaging places</h1>
            <button className='flex items-center gap-2 bg-[#7B61FF] md:p-6 p-4 rounded-xl md:text-lg  hover:cursor-pointer hover:bg-[#7B61FF]/70 transition'><CiGlobe size={20}/>Discover on 3D Globe</button>
        </div>
        <div className='flex bg-white  mx-auto p-4 rounded-xl items-center justify-between gap-7 max-w-285 w-full'>
            <div className='flex items-center gap-2'>
                
                <CiLocationOn  color='#FFA800' size={24} />
                <div>
                    <h4 className='text-[#979797] '>Location</h4>
                    <p className='text-[#161414]'>Explore nearby destinations</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                
                <IoMdBicycle color='#FFA800' size={24}/>
                 <div>
                    <h4 className='text-[#979797]  '>Activity</h4>
                    <p className='text-[#161414]'>All Activities</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
              
                <RiCalendarEventFill color='#FFA800' size={24}/>
                <div>
                    <h4 className='text-[#979797]  '>When</h4>
                    <p className='text-[#161414]'>Choose a Date</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
             
                <LuUsersRound color='#FFA800' size={24}/>
                   <div>
                    <h4 className='text-[#979797]  '>Guests</h4>
                    <p className='text-[#161414]'>1 guest</p>
                </div>
            </div>
            <div className='w-12 h-12 rounded-sm bg-[#7B61FF] flex items-center justify-center hover:cursor-pointer hover:bg-[#7B61FF]/70 transition '>
                <CiSearch color='white' size={24}/>
            </div>
        </div>
    </div>
  )
}

export default Hero
