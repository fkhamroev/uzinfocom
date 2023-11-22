import React, { useRef, useState } from "react";
import "./Video.css";
import video1 from "../../Assets/video/1.mp4";

export const Video = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video"
        onClick={handleVideoClick}
        onEnded={handleVideoEnded}
      >
        <source src={video1} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <h2 className="video-heading">Lorem ipsum dolor sit amet consectetur.</h2>

      {!playing && (
        <div className="play-icon" onClick={handlePlayPause}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <circle cx="32" cy="32" r="32" fill="rgba(0, 0, 0, 0.8)" />
            <polygon points="25,20 25,44 43,32" fill="#fff" />
          </svg>
        </div>
      )}
    </div>
  );
};
