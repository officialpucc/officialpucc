"use client";

import { Fragment, useEffect, useRef } from "react";

type Word = { text: string; em?: boolean };

const lines: Word[][] = [
  [{ text: "Get" }, { text: "a" }, { text: "pucc." }],
  [{ text: "Give" }, { text: "a" }, { text: "pucc." }],
  [{ text: "Build", em: true }, { text: "presence.", em: true }],
];

export default function FooterHeadline() {
  const ref = useRef<HTMLHeadingElement | null>(null);

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

  let wordIdx = 0;
  return (
    <h2 ref={ref} className="footer-headline stagger-words">
      {lines.map((line, lineIdx) => (
        <Fragment key={lineIdx}>
          {line.map((w) => {
            const idx = wordIdx++;
            const Tag = w.em ? "em" : "span";
            return (
              <Tag
                key={idx}
                className="stagger-word"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                {w.text}
              </Tag>
            );
          })}
          {lineIdx < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </h2>
  );
}
