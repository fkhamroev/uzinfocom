import React from "react";
import img from "../../../Assets/img/uz.svg";
import "./Tabs.css";

export const FirstTab = () => {
  return (
    <div className="first-tab">
      <img src={img} alt="" />
      <div className="firts-content">
        <h1 className="first-title">Бухарская ТЕС</h1>
        <p className="first-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          cupiditate voluptates, omnis quis expedita sunt dolor officia
          architecto nisi rerum, ut, autem nihil illum. Dolore tenetur, quaerat
          ex non minus iure exercitationem suscipit voluptatum aut vitae eveniet
          molestiae quas quam impedit magnam cum excepturi ullam neque
          reiciendis. Eveniet, delectus ex.
        </p>
        <div className="first-extra">
          <p>За год</p>
          <div className="div">
            <p>23 294</p>
            <p>тыс.гкал</p>
          </div>
        </div>
        <div className="first-extra">
          <p>За год</p>
          <div className="div">
            <p>23 294</p>
            <p>тыс.гкал</p>
          </div>
        </div>
      </div>
    </div>
  );
};
