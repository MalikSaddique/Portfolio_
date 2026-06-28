"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  text?: string;
}

export default function Counter({
  end,
  suffix = "",
  duration = 2,
  text,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || text) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, text]);

  if (text) {
    return (
      <span ref={ref} className="gradient-text text-3xl font-bold md:text-4xl">
        {text}
      </span>
    );
  }

  return (
    <span ref={ref} className="gradient-text text-3xl font-bold md:text-4xl">
      {count}
      {suffix}
    </span>
  );
}
