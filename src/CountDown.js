import React, { useEffect } from "react";
import Social from "./component/Social";
import Timer from "./component/Timer";
import video from "./video.mp4";
const CountDown = () => {
  useEffect(() => {
    var timerContent = document.getElementById('timer-content')
    timerContent.style.display = "none"
    var videoContent = document.getElementById('video-container')
    var video = document.getElementById('video')
    video.addEventListener('play', function () {
      setTimeout(() => {
        videoContent.style.display = "none"
        timerContent.style.display = "block"
        timerContent.classList.add('fade-in')
      }, 15000);
    })

  });
  return (
    <div className="App ">
      <div id="video-container" className="fullscreen-bg">
        <video
          loop
          autoPlay
          poster="img/videoframe.jpg"
          id="video"
          style={{ width: "100%" }}
          className="fullscreen-bg__video"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className=" counter-contant " id="timer-content">
        <div className="container">
          <h1>
            <img alt="img" style={{ width: '80%' }} src="/files/title.png" />
          </h1>
          <Timer />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
// db:mongodb+srv://admin:<admin>@cluster0.hbf5v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority