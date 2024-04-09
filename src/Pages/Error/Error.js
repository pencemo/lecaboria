import React from 'react'
import './Error.css'
// import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='Error'>
      {/* <Navbar /> */}
      <div className="wrap">
        <h1>4</h1>
        <img src="./assets/food.png" alt="" />
        <h1>4</h1>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ex. Laudantium, sed delectus? Voluptate velit suscipit omnis earum, ad officiis sint illum illo maiores nam hic, at excepturi. Eius, non.</p>
      <Link className='err-btn' to='/'>Back to Home</Link>
    </div>
  )
}

export default Error
