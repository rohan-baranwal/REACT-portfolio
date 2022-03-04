import React from "react";
import "./Testimonials.css";
import AVATAR from "../../assets/avatar1.jfif";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialItems = [
    {
      id: `avatar-${Math.random()}`,
      name: "Kelly Birr",
      avatarURL: AVATAR,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugiat ad vel autem vero impedit id repudiandae ipsa, distinctio sit maiores odit eum excepturi explicabo atque! Amet omnis reprehenderit eveniet!",
    },
    {
      id: `avatar-${Math.random()}`,
      name: "Kelly Cirr",
      avatarURL: AVATAR,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugiat ad vel autem vero impedit id repudiandae ipsa, distinctio sit maiores odit eum excepturi explicabo atque! Amet omnis reprehenderit eveniet!",
    },
    {
      id: `avatar-${Math.random()}`,
      name: "Kelly Dirr",
      avatarURL: AVATAR,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugiat ad vel autem vero impedit id repudiandae ipsa, distinctio sit maiores odit eum excepturi explicabo atque! Amet omnis reprehenderit eveniet!",
    },
    {
      id: `avatar-${Math.random()}`,
      name: "Kelly Eirr",
      avatarURL: AVATAR,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugiat ad vel autem vero impedit id repudiandae ipsa, distinctio sit maiores odit eum excepturi explicabo atque! Amet omnis reprehenderit eveniet!",
    },
  ];

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials-container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}>
        {testimonialItems.map((ti) => {
          return (
            <SwiperSlide className='testimonial' key={ti.id}>
              <div className='client-avatar'>
                <img src={ti.avatarURL} alt={ti.name} />
              </div>
              <h5 className='client-name'>{ti.name}</h5>
              <small className='client-review'>{ti.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
