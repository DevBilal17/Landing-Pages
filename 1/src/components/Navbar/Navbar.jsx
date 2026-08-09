import React from 'react'
import profileImg from "../../assets/me.jpeg"
const Navbar = () => {
  return (
    // #030406
    <nav className='container mx-auto'>
      <div>
        <h2>2rism</h2>
        <img src="/favicon.svg" alt="" />
      </div>
    
        <ul>
            <li>home</li>
            <li>hotels</li>
            <li>restaurants</li>
            <li>tours</li>
            <li>destinations</li>
            <li>activities</li>
            <li>contact</li>
        </ul>
      
      <div>
        <div>
            <p>Hola</p>
            <h4>M. Bilal</h4>
        </div>
        <div>
            <img src={profileImg} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
