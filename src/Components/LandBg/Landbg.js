import React from 'react'
import './Landbg.css'
// import {Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from './Slideshow';
import { Link } from 'react-router-dom';
import img1 from '../../Images/bg1.jpg'
import img2 from '../../Images/bg2.jpg'
import img3 from '../../Images/bg3.png'


function Landbg() {
    
  const slides = [
        {content: <div className="slide act">
            <div className="land-bg-img img-1"><img src={img1} alt="" /><div class="gride" ></div></div>
            <div className="contant container ">
                <h1>We do not cook, we create your emotions!</h1>
                <p>At Le Caboria, we don’t just cook; we create emotions. Each dish is a masterpiece, crafted with
                    passion and precision to evoke the essence of the sea and stir your senses. Our culinary artistry
                    transforms fresh, sustainably sourced seafood into an unforgettable dining experience, leaving you
                    with lasting memories of flavors and feelings. Come to Le Caboria and let us create your emotions
                    with every bite.</p>
                <div className="home-btn">
                    <Link className='btns2 ' to='/menu'>Book a Table</Link>
                    <Link className='btns btns1' to='/menu'>Order Now</Link>
                </div>
            </div>
        </div>},
        {content: <div className="slide">
            <div className="land-bg-img img-1"><img src={img2} alt="" /><div class="gride" ></div></div>
            <div className="contant container ">
                <h1>Dive into Freshness</h1>
                <p>At Le Caboria, every meal is a plunge into the ocean's bounty. Our commitment to fresh, sustainably
                    sourced seafood ensures that each dish bursts with vibrant flavors and unparalleled quality. Come
                    experience the true taste of the sea in a setting that captures the essence of coastal dining.
                    </p>
                <div className="home-btn">
                    <Link className='btns2 ' to='/menu'>Book a Table</Link>
                    <Link className='btns btns1' to='/menu'>Order Now</Link>
                </div>
            </div>
        </div>},
        {content: <div className="slide ">
            <div className="land-bg-img img-1"><img src={img3} alt="" /><div class="gride" ></div></div>
            <div className="contant container ">
                <h1>Taste the Tide</h1>
                <p>At Le Caboria, the rhythm of the tides inspires our menu. From our signature crab dishes to seasonal
                    seafood specials, each plate is a reflection of the ocean's bounty. Join us to savor the freshest flavors
                    of the sea, meticulously prepared by our expert chefs.
                    </p>
                <div className="home-btn">
                    <Link className='btns2 ' to='/menu'>Book a Table</Link>
                    <Link className='btns btns1' to='/menu'>Order Now</Link>
                </div>
            </div>
        </div>},

        
  ];




  return (
    <div className='landbg'>
          
        
        <div class="landing-bg">
        <Slideshow className='slideshow' slides={slides} />
        
        
        
        </div>
    



        
      
    </div>
  )
}

export default Landbg
