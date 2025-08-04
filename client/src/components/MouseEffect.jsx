import React, { useEffect, useState } from "react";

function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255, 255, 153, 0.3), transparent 80%)`,

        transition: "background 0.1s ease",
      }}
    />
  );
}

export default MouseEffect;
