import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import {
  faTelegram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderSwiper.css";

import slider1 from "../../Assets/img/slider1.jpg";
import slider2 from "../../Assets/img/slider2.jpg";

export const SliderSwiper = () => {
  return (
    <div className="slider">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-icons">
            <FontAwesomeIcon className="slider-icon" icon={faTelegram} />
            <FontAwesomeIcon className="slider-icon" icon={faTwitter} />
            <FontAwesomeIcon className="slider-icon" icon={faFacebook} />
          </div>
          <div className="slider-item" data-overlay="true">
            <img src={slider1} alt="Slide 1" />
            <div className="slider-content">
              <div>
                <h2 className="slider-tit">Национальные</h2>
                <h1 className="slider-title">Электрические сети</h1>
                <h1 className="slider-title">Узбекистана</h1>
                <a href="#" className="slider-link">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item" data-overlay="true">
            <img src={slider2} alt="Slide 2" />
            <div className="slider-content">
              <h2 className="slider-tit">Национальные</h2>
              <h1 className="slider-title">Электрические сети</h1>
              <h1 className="slider-title">Узбекистана</h1>
              <a href="#" className="slider-link">
                Подробнее
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
