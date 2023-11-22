import React, { useState } from "react";
import "./Footer.css";
import logo from "../../Assets/img/UZINFOCOM_logo.png";

export const Footer = () => {
  const [activeLink, setActiveLink] = useState(0); 

  const handleSetActive = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="footer">
      <div className="container">
        <h2 className="footer-subtitle">Национальные</h2>
        <h1 className="footer-title">Электрические сети</h1>
        <h1 className="footer-title">Узбекистана</h1>
        <ul className="footer-menu">
          {[
            "Об обществе",
            "Руководство",
            "Структура",
            "Деятельность",
            "Нормативные документы",
            "Пресс-центр",
            "Контакты",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`footer-link ${
                  activeLink === index ? "active" : ""
                }`}
                onClick={() => handleSetActive(index)}
              >
                {item}
                {activeLink === index && <span className="arrow-down"></span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-content">
          <div className="content-info">
            <p className="footer-desc">
              При использовании материалов ссылка на{" "}
              <span>
                <a href="#">www.Обязательна</a>
              </span>
            </p>
            <p className="footer-desc">© Все права защищены 2019-2020</p>
          </div>
          <div className="content-links">
            <div>
              <li>Единый номер телефона</li>
              <li>Телефон доверия</li>
              <li>Время приема граждан</li>
            </div>
            <div>
              <a href="tel:9989">998 97 666-77-88</a>
              <a href="tel:9989">998 97 666-77-88</a>
              <p>С 09:00 до 16:00</p>
            </div>
          </div>
        </div>
        <div className="footer-extra">
          <p>
            Внимание! Если вы нашли ошибку в тексте, выделите её и нажмите
            Ctrl+Enter для уведомления
          </p>
          <p>
            Разработка{" "}
            <span>
              <img src={logo} alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
