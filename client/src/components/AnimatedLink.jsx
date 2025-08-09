import React, { useState } from "react";

export default function AnimatedLink({ text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-block overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        setHovered(false);
        setTimeout(() => setHovered(true), 10); // restart animation
      }}
      onMouseLeave={() => setHovered(false)}
    >
      {[...text].map((letter, index) => (
        <span
          key={index}
          className={`inline-block transform ${
            hovered ? "animate-navbar-letter" : ""
          }`}
          style={{
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
