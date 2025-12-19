// app/components/AnimatedText.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = { text?: string };

export default function Animated({ text = "Showcase Your Work" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // split into spans per word (simple manual split)
    const words = Array.from(el.querySelectorAll(".anim-word"));

    // reset any previous inline styles
    gsap.killTweensOf(words);

    // simple staggered entrance
    gsap.fromTo(
      words,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      }
    );

    // cleanup on unmount
    return () => {
      gsap.killTweensOf(words);
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* wrap each word in a span with class "anim-word" */}
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className="anim-word inline-block mr-2 opacity-0"
          aria-hidden={false}
        >
          {w}
        </span>
      ))}
    </div>
  );
}
