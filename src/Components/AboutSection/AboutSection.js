import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './AboutSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            <img src="./assets/cook.png" alt="" data-aos="fade-right" />
        </div>
        <div className="about-text" data-aos="fade-up">
            <h3 className='abut-hed'>About Us</h3>
            <h1 className=''>We do not cook, we</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, commodi obcaecati nihil quas et magnam, sapiente ab similique ad nostrum laborum voluptatibus expedita saepe sint doloremque deleniti repudiandae officiis tempore?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem amet exercitationem provident error, sint est, delectus esse explicabo blanditiis laboriosam cupiditate a eaque, ducimus quam eius? Illo dignissimos quod veniam!</p>
            <Link  className='btn-2'  to='/about'>More About Us</Link>
        </div>
        <img className='leef' src="./assets/leef.png" alt="" />
      </div>
      <div className="icons">
        <div className="icons-wrap" data-aos="fade-up" data-aos-delay="0">
            <i class="fa-thin fa-bell-concierge"></i>
            <h4>Lorem ipsum dolor</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="icons-wrap" data-aos="fade-up" data-aos-delay="100">
            <i class="fa-thin fa-grill-hot"></i>
            <h4>adipisicing elit dolor</h4>
            <p>adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="icons-wrap" data-aos="fade-up" data-aos-delay="200">
            <i class="fa-thin fa-burger-fries"></i>
            <h4>it amet consectetur</h4>
            <p>sdolor  adipisicing it amet consectetur Lorem ipsum dolor  adipisicing elit.</p>
        </div>
        <div className="icons-wrap" data-aos="fade-up" data-aos-delay="300">
            <i class="fa-thin fa-mug-marshmallows"></i>
            <h4>Adipisicing elit</h4>
            <p>consectetur adipisicing elit. Voluptate nemo nesciunt temporibus sunt architecto</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
