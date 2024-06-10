import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './AboutSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import leef from '../../Images/leef.png'
import cook from '../../Images/cook.png'

function AboutSection() {
  useEffect(()=>{
      AOS.init({
        delay: 100, 
        duration: 2000,
        easing: 'ease-in-out',
      });
  }, []);
  return (
    <div className=' about-section'>
        <div className="bgblur"></div>
      <div className="about-wrap container " data-aos="fade-up" data-aos-duration="1000">
        <div className="about-img">
            <div className='round'></div>
            <img src={cook} alt="" data-aos="fade-right" />
        </div>
        <div className="about-text" data-aos="fade-up">
            <h3 className='abut-hed'>About Us</h3>
            <h1 className=''>We do not cook, we</h1>
            <p>Le Caboria is a premier seafood restaurant powered by Seabay LLC, offering a delectable array of
              fresh, ocean-inspired dishes. Renowned for its vibrant ambiance and exceptional service, Le Caboria
              prides itself on using sustainably sourced ingredients to create a memorable dining experience.
              Whether you're indulging in our signature crab dishes or savoring the catch of the day, every meal at
              Le Caboria is a celebration of the sea's finest flavors.
              </p>
            <Link  className='btn-2'  to='/about'>More About Us</Link>
        </div>
        <img className='leef' src={leef} alt="" />
      </div>
      <div className="container grid grid-cols-4 gap-3 mt-10 text-center max-lg:grid-cols-2 max-sm:grid-cols-1 w-full justify-between">
        <div className="icons-wrap px-3 py-4 rounded-2xl" data-aos="fade-up" data-aos-delay="0">
            <i className="my-2 fa-thin fa-grill-hot"></i>
            <h4>Sustainably Sourced Seafood</h4>
            <p>Le Caboria is committed to sustainability, ensuring all seafood is
                responsibly harvested to protect marine ecosystems and provide the freshest ingredients</p>
        </div>
        <div className="icons-wrap px-3 py-4 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
            <i className="my-2 fa-thin fa-bell-concierge"></i>
            <h4 className=''>Signature Crab Dishes</h4>
            <p>Renowned for its exceptional crab recipes, Le Caboria offers a variety of
                unique crab dishes that showcase the rich, delicate flavors of this premium seafood</p>
        </div>
        <div className="icons-wrap px-3 py-4 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
            <i className="my-2 fa-thin fa-lamp-floor"></i>
            <h4>Vibrant Ambiance</h4>
            <p>The restaurant features a vibrant and inviting atmosphere, with nautical-themed
                decor and an open dining space that perfectly complements the seafood dining experience.</p>
        </div>
        <div className="icons-wrap px-3 py-4 rounded-2xl" data-aos="fade-up" data-aos-delay="300">
            <i className="my-2 fa-thin fa-user-chef"></i>
            <h4>Expert Culinary Team</h4>
            <p>Le Caboria's chefs are seafood specialists, combining traditional techniques
              with innovative culinary artistry to create memorable and delicious dishes</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
