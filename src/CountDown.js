// import React, { useEffect } from "react";
// import Social from "./component/Social";
// import Timer from "./component/Timer";
// const CountDown = () => {
//   useEffect(() => {
//     var timerContent = document.getElementById('timer-content')
//     timerContent.style.display = "none"
//     var videoContent = document.getElementById('video-container')
//     var video = document.getElementById('video')
//     video.addEventListener('play', function () {
//       setTimeout(() => {
//         videoContent.style.display = "none"
//         timerContent.style.display = "block"
//         timerContent.classList.add('fade-in')
//       }, 15000);
//     })

//   });
//   return (
//     <div className="App ">
//       <div id="video-container" className="fullscreen-bg">
//         <video
//           loop
//           autoPlay
//           poster="img/videoframe.jpg"
//           id="video"
//           style={{ width: "100%" }}
//           className="fullscreen-bg__video"
//         >
//           <source src="https://res.cloudinary.com/dq52qsb4j/video/upload/v1637127214/video_hvgx3s.mp4" type="video/mp4" />
//         </video>
//       </div>
//       <div className=" counter-contant " id="timer-content">
//         <div className="container">
//           <h1>
//             <img alt="img" style={{ width: '80%' }} src="/files/title.png" />
//           </h1>
//           <Timer />
//           <Social />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountDown;

import React, { useEffect } from 'react'


const CountDown = () => {
  useEffect(() => {
    setTimeout(() => {
      playAgain()
    }, 10000);
  }, [])
  const playAgain = () => {
    const video = document.getElementById('video')
    const audio = document.getElementById('audio')
    const preloader = document.getElementById('preloader')
    video.muted = false;
    video.currentTime = 0
    audio.muted = false
    audio.currentTime = 0
    video.style.display = "block"
    preloader.style.display = "none"
    video.play()
    audio.play()
  }
  return (
    <div className="app" style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <div id="preloader">
        <img alt="img" src="/files/preloader.gif" />
      </div>
      <video
        preload
        muted
        autoPlay
        controls
        id="video"

        style={{ display: 'none', width: "100%" }}
        className="fullscreen-bg__video"
      >
        <source src="https://res.cloudinary.com/dq52qsb4j/video/upload/v1637131761/myFinalVideo_hyaph9.mp4" type="video/mp4" />
      </video>
      <audio muted id="audio" style={{ display: 'none' }} src="https://res.cloudinary.com/dq52qsb4j/video/upload/v1637131780/myFInalAudio_ubhklt.mp3" preload autoPlay controls ></audio>
    </div>

  )
}

export default CountDown
