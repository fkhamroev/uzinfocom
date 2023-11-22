import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Companies.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Companies = () => {
  const [countries, setCountries] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Загрузка данных о странах с API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
      });
  }, []);

  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Отображение стрелок
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="companies">
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {countries.slice(0, 9).map((country, index) => (
            <div key={index} className="country-slide">
              <img
                className="country-img"
                src={country.flags?.png} // Обратите внимание на обращение к свойству flags
                alt={country.name?.common} // Обратите внимание на обращение к свойству name
              />
              <p className="country-desc">{country.name?.common}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
