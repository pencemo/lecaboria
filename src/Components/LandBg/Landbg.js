import React from 'react'
import './Landbg.css'
// import {Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from './Slideshow';
import { Link } from 'react-router-dom';


function Landbg() {
    
  const slides = [
        {content: <div className="slide act">
            <div className="land-bg-img img-1"><img src="./assets/bg1.jpg" alt="" /><div class="gride" ></div></div>
            <div className="contant container ">
                <h1>We do not cook, we create your emotions!</h1>
                <p>Furnish your home with distinctive pieces from our furniture collection. Whether you're looking for a complete bedroom set, spacious wardrobes, comfortable sofas, or functional office furniture, Ghazi Homeware offers an exclusive range to suit your needs. Our designs combine practicality with aesthetics for a harmonious living experience.</p>
                <div className="home-btn">
                    <Link className='btns2 ' to='/menu'>Book a Table</Link>
                    <Link className='btns btns1' to='/menu'>Order Now</Link>
                </div>
            </div>
        </div>},
        {content: <div className="slide">
            <div className="land-bg-img img-1"><img src="./assets/bg2.jpg" alt="" /><div class="gride" ></div></div>
            <div className="contant container ">
                <h1>create your emotions!</h1>
                <p>pieces from our furniture collection. Whether you're looking for a complete bedroom set, spacious wardrobes, comfortable sofas, or functional office furniture, Ghazi Homeware offers an exclusive range to suit your needs. Our designs combine practicality with aesthetics for a harmonious living experience.</p>
                <div className="home-btn">
                    <Link className='btns2 ' to='/menu'>Book a Table</Link>
                    <Link className='btns btns1' to='/menu'>Order Now</Link>
                </div>
            </div>
        </div>},
        {content: <div className="slide ">
            <div className="land-bg-img img-1"><img src="./assets/bg3.png" alt="" /><div class="gride" ></div></div>
            <div className="contant container ">
                <h1>We do no emotions!</h1>
                <p>collection. Whether yous wardrobes, comfortable sofas, or functional office furniture, Ghazi Homeware offers an exclusive range to suit your needs. Our designs combine practicality with aesthetics for a harmonious living experience.</p>
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
