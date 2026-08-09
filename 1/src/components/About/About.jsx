import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import aboutImg from "../../assets/about.png"
const About = () => {
  return (
    <div>
      <div>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <button>Read more <FaArrowRight/></button>
      </div>
      <div>
        <img src={aboutImg} alt={"About Image"} />
      </div>
    </div>
  )
}

export default About
