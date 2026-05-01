import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initScrollTrigger = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
};

export const staggerIn = (elements: string, container: string) => {
  return gsap.from(elements, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
  });
};
