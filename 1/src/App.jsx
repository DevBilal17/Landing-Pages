import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Popular from './components/PopularDestinations/Popular'
import Hotels from './components/Hotels/Hotels'

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Popular/> 
     <Hotels/>
    </>
  )
}

export default App
