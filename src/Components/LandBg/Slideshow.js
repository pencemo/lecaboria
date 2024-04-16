import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';

function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
//   setInterval(prev, 1000);

  return (
    <div className="slideshow">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === index ? 'act' : ''}`}>
          {slide.content}
        </div>
      ))}
      <div class="next-pvr-btn">
            <button class="prev slide-btn" onClick={prev}><ChevronLeft  size={30} strokeWidth={0.75} /></button>
            <div class="line"></div>
            <button class="next slide-btn" onClick={next}><ChevronRight  size={30} strokeWidth={0.75} /></button>
        </div>
        <div class="scial-icon container ">
          <div className='icon-wrap'>
          <p>Folow Us</p>
          <div className="follow"></div>
            <a href="https://www.facebook.com/"><Facebook size={21} strokeWidth={1} /></a>
            <a href="https://www.instagram.com/"><Instagram size={21} strokeWidth={1} /></a>
            <a href="mailto:mghazitrading@gmail.com"><Mail size={21} strokeWidth={1} /></a>
            <a href="https://wa.me/+971543266421"><MessageCircle size={21} strokeWidth={1} /></a>
          </div>
        </div>
    </div>
  );
}

export default Slideshow;
