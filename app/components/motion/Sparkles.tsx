"use client";

import { useEffect, useState } from "react";

type Spark = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

type Props = {
  count?: number;
  className?: string;
};

export default function Sparkles({ count = 22, className = "" }: Props) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setSparks(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 1.4,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
      })),
    );
  }, [count]);

  return (
    <div className={`sparkles ${className}`.trim()} aria-hidden>
      {sparks.map((s) => (
        <span
          key={s.id}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
