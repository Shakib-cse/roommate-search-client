import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Banner = () => {
  return (
    <div>
      <Swiper className="mySwiper max-h-screen"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}>
        <SwiperSlide><img className="w-full h-screen object-center" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" alt="pexels-william-fortunato-6140459"></img></SwiperSlide>
        <SwiperSlide><img className="w-full h-screen object-center" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80" alt="pexels-william-fortunato-6140459"></img></SwiperSlide>
        <SwiperSlide><img className="w-full h-screen object-center" src="https://i.ibb.co/Xf6HwR6P/pexels-william-fortunato-6140459.jpg" alt="pexels-william-fortunato-6140459"></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
