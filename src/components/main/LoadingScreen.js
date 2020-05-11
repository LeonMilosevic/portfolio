import React from "react";
import Circle1 from "../../images/circle1.svg";
import Circle2 from "../../images/circle2.svg";
import Circle3 from "../../images/circle3.svg";
// third lib import
import { gsap, Power1 } from "gsap";
const LoadingScreen = () => {
  React.useEffect(() => {
    const circle1 = document.querySelector(".loader_circle__circle_1");
    const circle2 = document.querySelector(".loader_circle__circle_2");
    const circle3 = document.querySelector(".loader_circle__circle_3");
    // create timelines
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();

    /* Desc: Take one circle(element) and rotate it fully with overlapsing timelines at the same time */
    // first timeline
    tl1.to(circle1, { x: -125, y: -123, duration: 0.5, scale: 1.2 });
    tl1.to(circle1, { x: -25, y: 5, duration: 0.5, scale: 1.5 });
    tl1.to(circle1, { x: -225, duration: 0.5, scale: 2 });
    tl1.to(circle1, {
      filter: "blur(5px)",
      duration: 0.5,
    });
    // reversing tl 1 in blur mode
    tl1.to(circle1, { x: -25, y: 5, duration: 0.1 });
    tl1.to(circle1, { x: -115, y: -113, duration: 0.1 });
    tl1.to(circle1, { x: -220, y: 0, duration: 0.1 });
    tl1.to(circle1, {
      filter: "blur(0px)",
      duration: 0.5,
    });
    // second timeline
    tl2.to(circle2, { x: -233, duration: 0.5, scale: 1.2 });
    tl2.to(circle2, { x: -135, y: -266, duration: 0.5, scale: 1.5 });
    tl2.to(circle2, { x: -35, y: -150, duration: 0.5, scale: 2 });
    tl2.to(circle2, {
      filter: "blur(5px)",
      duration: 0.5,
    });
    // reversing tl 2 in blur mode
    tl2.to(circle2, { x: -135, y: -266, duration: 0.1 });
    tl2.to(circle2, { x: -233, y: -160, duration: 0.1 });
    tl2.to(circle2, { x: -40, y: -160, duration: 0.1 });
    tl2.to(circle2, {
      filter: "blur(0px)",
      duration: 0.5,
    });
    // third timeline
    tl3.to(circle3, { x: 100, y: -123, duration: 0.5, scale: 1.2 });
    tl3.to(circle3, { x: -100, duration: 0.5, scale: 1.5 });
    tl3.to(circle3, { x: 0, y: -240, duration: 0.5, scale: 2 });
    tl3.to(circle3, {
      filter: "blur(5px)",
      duration: 0.5,
    });
    // reversing tl 3 in blur mode
    tl3.to(circle3, { x: -100, y: -123, duration: 0.1 });
    tl3.to(circle3, { x: 100, y: -123, duration: 0.1 });
    tl3.to(circle3, { x: 10, y: -243, duration: 0.1 });
    tl3.to(circle3, {
      filter: "blur(0px)",
      duration: 0.5,
    });
  }, []);

  return (
    <div className="load-page">
      <div className="loader_circle loader_circle__circle_1">
        <img
          style={{ height: 250, width: 250 }}
          src={Circle1}
          alt="Loading Circle"
        />
      </div>
      <div className="loader_circle loader_circle__circle_2">
        <img
          style={{ height: 250, width: 250 }}
          src={Circle2}
          alt="Loading Circle"
        />
      </div>
      <div className="loader_circle loader_circle__circle_3">
        <img
          style={{ height: 250, width: 250 }}
          src={Circle3}
          alt="Loading Circle"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
