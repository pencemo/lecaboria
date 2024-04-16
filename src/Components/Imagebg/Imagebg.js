import React from 'react'
import './Imagebg.css'
import bg from '../../Images/img.jpg'

function Imagebg() {
  return (
    <div className='bgimg' style={{background: `linear-gradient(45deg, hsla(0, 0%, 0%, 0.7), hsla(0, 0%, 5%, 0.6)), url(${bg}) no-repeat center`, backgroundSize:"cover"}}>
      <h1  data-aos="fade-up">We do no emotions!</h1>
      <p  data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore et sint veniam molestias ullam alias at exercitationem unde. Numquam iste qui perferendis sit natus animi doloribus pariatur repellendus tenetur libero.</p>
    </div>
  )
}

export default Imagebg
