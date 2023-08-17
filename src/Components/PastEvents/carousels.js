import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const ImageCarousel = ({ images }) => {
  return (
    <>
      <div className="carousel">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                height="1em"
                style={{ width: "100%", height: "100%" }}
                alt={`${index + 1}`}
              />
              ;
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageCarousel;
