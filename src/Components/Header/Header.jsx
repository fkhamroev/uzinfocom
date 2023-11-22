import React, { useState } from "react";
import "./Header.css";
import header_logo from "../../Assets/img/logo.png";
import { faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const [activeButton, setActiveButton] = useState("Ru"); // Устанавливаем начальную активную кнопку

  const handleClick = (lang) => {
    setActiveButton(lang);
  };
  return (
    <div className="header container">
      <div className="header-info">
        <div className="header-logo">
          <img src={header_logo} alt="" className="header-img" />
          <h1 className="logo-name">O'ZMET</h1>
        </div>
        <h1 className="header-title">
          Национальные <br />
          Электрические сети
          <br />
          Узбекистана
        </h1>
      </div>
      <div className="header-search">
        {/* <input className="header-input" type="search" placeholder="Поиск..." /> */}
        <div className="search-bar">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Поиск..."
            />
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
        <FontAwesomeIcon className="header-icon" icon={faEye} />
        <button
          className={activeButton === "Ru" ? "header-btn active" : "header-btn"}
          onClick={() => handleClick("Ru")}
        >
          Ру
        </button>
        <button
          className={activeButton === "Uz" ? "header-btn active" : "header-btn"}
          onClick={() => handleClick("Uz")}
        >
          Уз
        </button>
      </div>
    </div>
  );
};
