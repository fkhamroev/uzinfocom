import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar container">
      <ul className="navbar-menu">
        <li>
          <a href="#" className="menu-link">
            Об обществе
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Руководство
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Структура
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Деятельность
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Нормативные документы
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Пресс-центр
          </a>
        </li>
        <li>
          <a href="#" className="menu-link">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};
