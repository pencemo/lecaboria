import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from '../../assets/img.jpg'
import Img1 from '../../assets/bg3.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./MenuSection.css";
import { Import } from "lucide-react";

function MenuSection() {
  const menudata =[
    {
      name: 'food Name 1',
      image: Img,
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$65'
    },
    {
      name: 'food Name 2',
      image: Img1,
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$100'
    },
    {
      name: 'food Name 3',
      image: Img,
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$75'
    },
    {
      name: 'food Name 4',
      image: Img1,
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$86'
    },
    {
      name: 'food Name 5',
      image: Img,
      disc: 'Lorem ipsum dolor, sictetur adipisicing elit. Error,perferendis.',
      rs: '$65'
    },
    {
      name: 'food Name 6',
      image: Img1,
      disc: 'dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$85'
    },
    {
      name: 'food Name 7',
      image: Img,
      disc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,perferendis.',
      rs: '$65'
    },
    {
      name: 'food Name 2',
      image: Img1,
      disc: 'Lorem ipsum dolor, sit amet consectetur adip. Error,perferendis.',
      rs: '$55'
    },
  ]
  return (
    <div className="menu">
      <div className="swiper-head">
        <h4>Our Delicious</h4>
        <h2>Menu</h2>
        <p>Discover Le Caboria's delicious menu, where fresh, sustainably sourced seafood is transformed into culinary masterpieces. From our signature crab dishes to seasonal specials, every bite is an exquisite taste of the ocean.</p>
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
              <SwiperSlide className="swp-card border">
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
