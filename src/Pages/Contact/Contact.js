import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Button } from "flowbite-react";

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-blue-600">
      Hello world!
    </h1>
    <Button>Click me</Button>
      <Footer></Footer>
    </div>
  )
}

export default Contact
