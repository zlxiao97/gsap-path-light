import { gsap } from "gsap";
import { useEffect } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./App.css";

gsap.registerPlugin(MotionPathPlugin);

function App() {
  useEffect(() => {
    // const path = MotionPathPlugin.convertToPath("#polygon")[0];
    gsap.to(".light", {
      motionPath: {
        path: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 3,
      repeat: -1,
      repeatDelay: 10,
      ease: "linear",
      transformOrigin: "50% 50%",
    });
    gsap.to(".light", {
      duration: 3,
      repeat: -1,
      repeatDelay: 10,
      ease: "power4.in",
      opacity: 0,
    });
  }, []);
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="container">
        <img
          className="light"
          src={require("./assets/light.png").default}
          alt=""
        />
      </div>
      <svg width="0" height="0">
        <clipPath id="test">
          <polygon
            id="polygon"
            points="326.654496 -2.18241374 341.761466 -28.101122 829.756587 256.33157 418.721 472.869 904.046 777.546 1814.48563 268.109118 1947.2708 357.806011 1930.47801 382.665662 1813.006 303.313 903.166248 812.416207 358.674606 470.595141 767.906 255.006"
          ></polygon>
        </clipPath>
      </svg>
      <svg width="0" height="0">
        <path
          d="M358,0 C570.666667,119.333333 689,187 713,203 C749,227 749,280 703,305 C657,330 494,409 454,432 C414,455 428,496 454,513 C480,530 832,750 858,767 C884,784 920,792 960,767 C1000,742 1730,333 1757,315 C1784,297 1833,293 1849,305 C1859.66667,313 1885.33333,331.333333 1926,360"
          id="path"
          stroke="#979797"
          stroke-width="6"
        ></path>
      </svg>
    </div>
  );
}

export default App;
