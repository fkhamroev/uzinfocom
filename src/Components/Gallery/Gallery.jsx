import React from "react";
import "./Gallery.css";
import gallery1 from "../../Assets/img/gallery1.jpg";
import gallery2 from "../../Assets/img/gallery2.jpg";
import gallery3 from "../../Assets/img/gallery3.jpg";
import gallery4 from "../../Assets/img/gallery4.jpg";
// import slider from "../../Assets/video/1.mp4";
import { Video } from "../Video/Video";

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-slider">
        <Video />
      </div>
      <div className="gallery-photo">
        <div className="gallery-row1">
          <img className="gallery-img" src={gallery1} alt="" />
          <img className="gallery-img" src={gallery2} alt="" />
        </div>
        <div className="gallery-row2">
          <img className="gallery-img" src={gallery3} alt="" />
          <img className="gallery-img" src={gallery4} alt="" />
        </div>
      </div>
    </div>
  );
};
