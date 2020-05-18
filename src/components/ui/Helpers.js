import { gsap, Back } from "gsap";
import React from "react";

const spinCircles = () => {
  const circle1 = document.querySelector(".loader_circle__circle_1");
  const circle2 = document.querySelector(".loader_circle__circle_2");
  const circle3 = document.querySelector(".loader_circle__circle_3");

  let exitCircle1Tl = new gsap.timeline();
  let exitCircle2Tl = new gsap.timeline();
  let exitCircle3Tl = new gsap.timeline();

  // first circle spin
  exitCircle1Tl.to(circle1, {
    opacity: 1,
    duration: 0.3,
    ease: Back,
    delay: 0.3,
  });
  exitCircle1Tl.to(circle1, {
    xPercent: 120,
    yPercent: -50,
    duration: 0.1,
    ease: Back,
  });
  exitCircle1Tl.to(circle1, {
    xPercent: 60,
    yPercent: -145,
    duration: 0.1,
    ease: Back,
  });
  exitCircle1Tl.to(circle1, {
    xPercent: 0,
    yPercent: -50,
    duration: 0.1,
    ease: Back,
  });
  exitCircle1Tl.to(circle1, {
    opacity: 0.35,
    duration: 0.3,
    delay: 0.1,
    ease: Back,
  });
  // second circle spin
  exitCircle2Tl.to(circle2, {
    opacity: 1,
    duration: 0.3,
    ease: Back,
    delay: 0.3,
  });
  exitCircle2Tl.to(circle2, {
    xPercent: -60,
    yPercent: -145,
    duration: 0.1,
    ease: Back,
  });
  exitCircle2Tl.to(circle2, {
    xPercent: -120,
    yPercent: -50,
    duration: 0.1,
    ease: Back,
  });
  exitCircle2Tl.to(circle2, {
    xPercent: 0,
    yPercent: -50,
    duration: 0.1,
    ease: Back,
  });
  exitCircle2Tl.to(circle2, {
    opacity: 0.35,
    duration: 0.3,
    delay: 0.1,
    ease: Back,
  });
  // third circle spin
  exitCircle3Tl.to(circle3, {
    opacity: 1,
    duration: 0.3,
    ease: Back,
    delay: 0.3,
  });
  exitCircle3Tl.to(circle3, {
    xPercent: -110,
    yPercent: 95,
    duration: 0.1,
    ease: Back,
  });
  exitCircle3Tl.to(circle3, {
    xPercent: 10,
    yPercent: 95,
    duration: 0.1,
    ease: Back,
  });
  exitCircle3Tl.to(circle3, {
    xPercent: -50,
    yPercent: 0,
    duration: 0.1,
    ease: Back,
  });
  exitCircle3Tl.to(circle3, {
    opacity: 0.35,
    duration: 0.3,
    delay: 0.1,
    ease: Back,
  });
};

export const fadeOutElements = (
  elem1,
  elem2,
  elem3,
  elem4,
  elem5,
  elem6,
  elem7
) => {
  /* declaring timelines for elements because of timelines overlap,
     so more elements could be selected at the same time */
  let elem1Tl = new gsap.timeline();
  let elem2Tl = new gsap.timeline();
  let elem3Tl = new gsap.timeline();
  let elem4Tl = new gsap.timeline();
  let elem5Tl = new gsap.timeline();
  let elem6Tl = new gsap.timeline();
  let elem7Tl = new gsap.timeline();

  elem1Tl.to(elem1, { opacity: 0, duration: 0.2, ease: Back });
  elem2Tl.to(elem2, { opacity: 0, duration: 0.2, ease: Back });
  elem3Tl.to(elem3, {
    opacity: 0,
    duration: 0.2,
    ease: Back,
  });
  elem4Tl.to(elem4, { opacity: 0, duration: 0.2, ease: Back });
  elem5Tl.to(elem5, { opacity: 0, duration: 0.2, ease: Back });
  elem6Tl.to(elem6, { opacity: 0, duration: 0.2, ease: Back });
  elem7Tl.to(elem7, { opacity: 0, duration: 0.2, ease: Back });
};

export const changePageExitTransition = (
  elem1,
  elem2,
  elem3,
  elem4,
  elem5,
  elem6,
  elem7
) => {
  fadeOutElements(elem1, elem2, elem3, elem4, elem5, elem6, elem7);
  spinCircles();
};

export function useCombinedRefs(...refs) {
  const targetRef = React.useRef();

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
