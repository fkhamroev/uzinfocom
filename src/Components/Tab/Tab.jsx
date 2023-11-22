import React, { useState } from "react";
import "./Tab.css";
import { FirstTab } from "./AllTabs/FirstTab";
import { SecondTab } from "./AllTabs/SecondTab";

export const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeLink, setActiveLink] = useState(0);

  const handleSetActive = (index) => {
    setActiveLink(index);
    if (index === 0) {
      setActiveTab("tab1");
    } else if (index === 1) {
      setActiveTab("tab2");
    }
  };

  return (
    <section className="tabs">
      <div className="container">
        <ul className="tabs-menu">
          {["Схема электрических сетей", "Карта объектов"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`tabs-link ${
                    activeLink === index ? "active" : ""
                  }`}
                  onClick={() => handleSetActive(index)}
                >
                  {item}
                  {activeLink === index && <span className="arrow-down"></span>}
                </a>
              </li>
            )
          )}
        </ul>
        <div className="tabs-otlet">
          {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
        </div>
      </div>
    </section>
  );
};
