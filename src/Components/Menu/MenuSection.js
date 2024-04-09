import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./MenuSection.css";

function MenuSection() {
  const menudata =[
    {
      name: 'food Name 1',
      image: './assets/bg1.jpg',
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$65'
    },
    {
      name: 'food Name 2',
      image: './assets/bg2.jpg',
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$100'
    },
    {
      name: 'food Name 3',
      image: './assets/bg3.png',
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$75'
    },
    {
      name: 'food Name 4',
      image: './assets/bg1.jpg',
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$86'
    },
    {
      name: 'food Name 5',
      image: './assets/bg2.jpg',
      disc: 'Lorem ipsum dolor, sictetur adipisicing elit. Error,perferendis.',
      rs: '$65'
    },
    {
      name: 'food Name 6',
      image: './assets/bg3.png',
      disc: 'dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$85'
    },
    {
      name: 'food Name 7',
      image: './assets/bg1.jpg',
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$65'
    },
    {
      name: 'food Name 2',
      image: './assets/bg2.jpg',
      disc: 'Lorem ipsum dolor, sit amet consectetur adip. Error,perferendis.',
      rs: '$55'
    },
  ]
  return (
    <div className="menu">
      <div className="swiper-head">
        <h4>Our Delicious</h4>
        <h2>Menu</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime animi aspernatur odio tempora vel consequatur, cum quibusdam ex dolores ullam beatae nisi ad quisquam, repellendus dolorem, sapiente ducimus? Molestias!</p>
      </div>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >

          {
            menudata.map((item)=>(
              <SwiperSlide className="swp-card">
                <div className="food-img"><img src={item.image} alt="" /></div>
                <div className="card-text">
                  <h1>{item.name}</h1>
                  <p>{item.disc}</p>
                  <div className="order-btn">
                    <Link className="btn-2" to="/about">Order Now</Link>
                    <h2 className="fonts">{item.rs}</h2>
                  </div>
                </div>
              </SwiperSlide>

            ))
          }
          
          
        </Swiper>
      </Container>
    </div>
  );
}

export default MenuSection;
