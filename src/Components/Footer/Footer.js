import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className='container'>
      <div className="row footer-set  " >
            
            <div className="col-sm-6 col-md-3 col-lg-2 footer-set-box" >
              <h3 className="footer-head">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 footer-set-box" >
                <h3 className="footer-head">Account</h3>
                <ul className="footer-links">
                    <li><Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/order'>Order Now</Link></li>
                    <li><Link to='/book'>Book table</Link></li>
                    <li><Link to='/today'>Today Special</Link></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 footer-set-box" >
                <h3 className="footer-head">Social Media</h3>
                <ul className="footer-links">
                    <li><a href="google.com"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
                    <li><a href="google.com"><i class="fa-brands fa-instagram"></i>Instagtam</a></li>
                    <li><a href="google.com"><i class="fa-brands fa-whatsapp"></i>whatsapp</a></li>
                    <li><a href="google.com"><i class="fa-brands fa-google"></i>Google</a></li>
                    <li><a href="google.com"><i class="fa-solid fa-envelope"></i>Email</a></li>
                </ul>
            </div>
            
            <div className="col-sm-6 col-md-6 col-lg-4  footer-set-box">
              <div className='footer-logo'>
                <img  src="./assets/logo.png" alt="" />
                <p >We curate homeware that meets functional needs and inspires aesthetic pleasure.</p>
                <h1 className='fonts'><i class="fa-sharp fa-solid fa-phone"></i>+91 1234 567 890</h1>
                <h1><i class="fa-solid fa-envelope-open"></i>info@lecaboria.ae</h1>
              </div>
            </div>
    
        </div>
        <div className="bottom-line"></div>
        <div className="copyright">
          <p>Copyright © 2010-2024, All rights reserved.</p>
          <p>Powered by <a href="https://neptunemark.com/">NeptuneMark</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
