import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR5 from "../../assets/avatar5.jpg";
import AVTR6 from "../../assets/avatar6.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Dave Daverson",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad explicabo odit est ipsum in voluptate possimus voluptates. Quae facilis facere officiis, laudantium expedita neque pariatur odio, architecto aliquam alias ipsam.",
  },
  {
    avatar: AVTR2,
    name: "Mike Mikerson",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad explicabo odit est ipsum in voluptate possimus voluptates. Quae facilis facere officiis, laudantium expedita neque pariatur odio, architecto aliquam alias ipsam.",
  },
  {
    avatar: AVTR3,
    name: "Jim Jimerson",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad explicabo odit est ipsum in voluptate possimus voluptates. Quae facilis facere officiis, laudantium expedita neque pariatur odio, architecto aliquam alias ipsam.",
  },
  {
    avatar: AVTR4,
    name: "Bob Boberson",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad explicabo odit est ipsum in voluptate possimus voluptates. Quae facilis facere officiis, laudantium expedita neque pariatur odio, architecto aliquam alias ipsam.",
  },
  {
    avatar: AVTR5,
    name: "Josh Josherson",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad explicabo odit est ipsum in voluptate possimus voluptates. Quae facilis facere officiis, laudantium expedita neque pariatur odio, architecto aliquam alias ipsam.",
  },
  {
    avatar: AVTR6,
    name: "Bill Billerson",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad explicabo odit est ipsum in voluptate possimus voluptates. Quae facilis facere officiis, laudantium expedita neque pariatur odio, architecto aliquam alias ipsam.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Avatar' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
