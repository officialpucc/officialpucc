"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Variant = "fade-up" | "slide-left" | "slide-right" | "blur-in";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: Variant;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const variantClass = variant ? `reveal-${variant}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${className}`.replace(/\s+/g, " ").trim()}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
