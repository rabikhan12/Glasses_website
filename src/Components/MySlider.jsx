// src/components/MySlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {
  const navigate = useNavigate(); // 📍 for navigation

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img
          src="Sun.jpg"
          alt="Sun"
          style={{ width: '100%', height: '400px', cursor: 'pointer' }}
          onClick={() => navigate("/Sunn")} // 🔁 When this image clicked → go to /sunn
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="Optical.jpg"
          alt="Optical"
          style={{ width: '100%', height: '400px', cursor: 'pointer' }}
          onClick={() => navigate("/Optical")} // 🔁 When this image clicked → go to /optical
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="Antirad.jpg"
          alt="Antirad"
          style={{ width: '100%', height: '400px', cursor: 'pointer' }}
          onClick={() => navigate("/Antirad")} // 🔁 When this image clicked → go to /antirad
        />
      </SwiperSlide>
    </Swiper>
  );
}
