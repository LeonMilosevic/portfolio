import React from "react";
import Dots from "../ui/Dots";
// third lib import
import { gsap, Back } from "gsap";
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
    tl1.to(circle1, {
      xPercent: 60,
      yPercent: -145,
      duration: 0.5,
      scale: 1.3,
      ease: Back,
    });
    tl1.to(circle1, {
      xPercent: 120,
      yPercent: -50,
      duration: 0.5,
      scale: 1.7,
      ease: Back,
    });
    tl1.to(circle1, { xPercent: 0, duration: 0.5, scale: 2, ease: Back });
    tl1.to(circle1, {
      filter: "blur(5px)",
      duration: 0.5,
      ease: Back,
    });
    // reversing tl 1 in blur mode
    tl1.to(circle1, {
      xPercent: 120,
      yPercent: -50,
      duration: 0.1,
      ease: Back,
    });
    tl1.to(circle1, {
      xPercent: 60,
      yPercent: -145,
      duration: 0.1,
      ease: Back,
    });
    tl1.to(circle1, { xPercent: 0, yPercent: -50, duration: 0.1, ease: Back });
    tl1.to(circle1, {
      filter: "blur(0px)",
      duration: 0.5,
      ease: Back,
    });
    // second timeline
    tl2.to(circle2, { xPercent: -120, duration: 0.5, scale: 1.3, ease: Back });
    tl2.to(circle2, {
      xPercent: -60,
      yPercent: -145,
      scale: 1.7,
      duration: 0.5,
      ease: Back,
    });
    tl2.to(circle2, {
      xPercent: 0,
      yPercent: -50,
      duration: 0.5,
      scale: 2,
      ease: Back,
    });
    tl2.to(circle2, {
      filter: "blur(5px)",
      duration: 0.5,
      ease: Back,
    });
    // reversing tl 2 in blur mode
    tl2.to(circle2, {
      xPercent: -60,
      yPercent: -145,
      duration: 0.1,
      ease: Back,
    });
    tl2.to(circle2, {
      xPercent: -120,
      yPercent: -50,
      duration: 0.1,
      ease: Back,
    });
    tl2.to(circle2, {
      xPercent: 0,
      yPercent: -50,
      duration: 0.1,
      ease: Back,
    });
    tl2.to(circle2, {
      filter: "blur(0px)",
      duration: 0.5,
      ease: Back,
    });
    // third timeline
    tl3.to(circle3, {
      xPercent: 10,
      yPercent: 95,
      duration: 0.5,
      scale: 1.3,
      ease: Back,
    });
    tl3.to(circle3, { xPercent: -110, duration: 0.5, scale: 1.7, ease: Back });
    tl3.to(circle3, {
      xPercent: -50,
      yPercent: 0,
      duration: 0.5,
      scale: 2,
      ease: Back,
    });
    tl3.to(circle3, {
      filter: "blur(5px)",
      duration: 0.5,
      ease: Back,
    });
    // reversing tl 3 in blur mode
    tl3.to(circle3, {
      xPercent: -110,
      yPercent: 95,
      duration: 0.1,
      ease: Back,
    });
    tl3.to(circle3, {
      xPercent: 10,
      yPercent: 95,
      duration: 0.1,
      ease: Back,
    });
    tl3.to(circle3, {
      xPercent: -50,
      yPercent: 0,
      duration: 0.1,
      ease: Back,
    });
    tl3.to(circle3, {
      filter: "blur(0px)",
      duration: 0.5,
      ease: Back,
    });
  }, []);

  return (
    <div>
      <Dots />
    </div>
  );
};

export default LoadingScreen;
