import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import MenuItems from '../../Components/MenuItems/MenuItems'

function Menu() {
  return (
    <div>
      <Navbar></Navbar>
      <MenuItems></MenuItems>
      <Footer></Footer>
    </div>
  )
}

export default Menu
