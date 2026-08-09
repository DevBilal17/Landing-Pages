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
    className={`w-full min-h-screen bg-cover bg-center`} >
        <div>
            <h1>Discover the most engaging places</h1>
            <button><CiGlobe />Discover on 3D Globe</button>
        </div>
        <div>
            <div>
                
                <CiLocationOn />
                <div>
                    <h4>Location</h4>
                    <p>Explore nearby destinations</p>
                </div>
            </div>
            <div>
                
                <IoMdBicycle/>
                 <div>
                    <h4>Activity</h4>
                    <p>All Activities</p>
                </div>
            </div>
            <div>
              
                <RiCalendarEventFill/>
                <div>
                    <h4>When</h4>
                    <p>Choose a Date</p>
                </div>
            </div>
            <div>
             
                <LuUsersRound />
                   <div>
                    <h4>Guests</h4>
                    <p>1 guest</p>
                </div>
            </div>
            <div>
                <CiSearch/>
            </div>
        </div>
    </div>
  )
}

export default Hero
