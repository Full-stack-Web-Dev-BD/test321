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

import React from 'react'

const CountDown = () => {
  const videoLoaded = () => {
    console.log("video is loaded ")
    var videoElement = document.getElementById("video")
    console.log(videoElement.readyState)
  }
  return (
    <div>
      <video
        preload
        autoPlay
        controls
        onLoadedData={e => videoLoaded()}
        poster="img/videoframe.jpg"
        id="video"

        style={{ width: "100%" }}
        className="fullscreen-bg__video"
      >
        {/* https://res.cloudinary.com/dq52qsb4j/video/upload/v1637128356/originalvideo_qq9tmy.mp4 */}
        <source src="https://res.cloudinary.com/dq52qsb4j/video/upload/v1637127214/video_hvgx3s.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default CountDown
