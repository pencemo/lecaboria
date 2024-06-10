import React from 'react'
import './Imagebg.css'
import bg from '../../Images/img.jpg'

function Imagebg() {
  return (
    <div className='bgimg flex flex-col items-center justify-center text-center' style={{background: `linear-gradient(45deg, hsla(0, 0%, 0%, 0.7), hsla(0, 0%, 5%, 0.6)), url(${bg}) no-repeat center`, backgroundSize:"cover"}}>
      <h1  data-aos="fade-up" className='text-waikawa-gray-100'>Dive into Freshness</h1>
      <p  data-aos="fade-up">Discover Le Caboria's delicious menu, where fresh, sustainably sourced seafood is transformed into
      culinary masterpieces. From our signature crab dishes to seasonal specials, every bite is an exquisite
      taste of the ocean.</p>
    </div>
  )
}

export default Imagebg
