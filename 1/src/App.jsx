import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Popular from './components/PopularDestinations/Popular'
import Hotels from './components/Hotels/Hotels'
import Tips from './components/Travel Tips/Tips'
import Activities from './components/Activities/Activities'
import About from './components/About/About'

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Popular/> 
     <Hotels/>
     <Tips/>
     <Activities/>
     <About/>
    </>
  )
}

export default App
