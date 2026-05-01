"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number 
}) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 90%",
      },
      onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.innerText = prefix + obj.val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix;
        }
      },
    });
  }, [value, prefix, suffix, decimals]);

  return <span ref={elementRef}>{prefix}0{suffix}</span>;
}
