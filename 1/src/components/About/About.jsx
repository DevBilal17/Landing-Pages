import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import aboutImg from "../../assets/about.png"
const About = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 container mx-auto px-3 py-10 gap-8 items-center'>
      <div className='flex flex-col gap-8'>
        <h2 className="text-2xl font-bold text-[#161414]">About Us</h2>
        <p className='text-[#5B5B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <button className="p-2.5 w-fit flex items-center border border-[#7B61FF] rounded-xl text-[#7B61FF] gap-1 bg-[#F6F4FF] cursor-pointer">Read more <FaArrowRight/></button>
      </div>
      <div className='md:h-[488px] h-80 rounded-xl overflow-hidden'>
        <img src={aboutImg} alt={"About Image"}  className='h-full w-full object-cover object-center'/>
      </div>
    </div>
  )
}

export default About
