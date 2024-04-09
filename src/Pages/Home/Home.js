import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Landbg from '../../Components/LandBg/Landbg'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Footer from '../../Components/Footer/Footer'
import MenuSection from '../../Components/Menu/MenuSection'
import Imagebg from '../../Components/Imagebg/Imagebg'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Landbg></Landbg>
      <AboutSection></AboutSection>
      <Imagebg></Imagebg>
      <MenuSection></MenuSection>
      <Footer></Footer>
    </div>
  )
}

export default Home
