import React, { useEffect, useState, useRef } from "react";

function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [cursorColor, setCursorColor] = useState("white");

  const lastScrollTop = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect background brightness & adjust cursor color
      try {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
          const bgColor = window.getComputedStyle(element).backgroundColor;
          if (bgColor.startsWith("rgb")) {
            const rgb = bgColor
              .match(/\d+/g)
              ?.map((num) => parseInt(num, 10)) || [255, 255, 255];
            const brightness =
              (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 255;
            setCursorColor(brightness > 0.5 ? "black" : "white");
          }
        }
      } catch (err) {
        console.warn("Background detection error:", err);
      }
    };

    // Scroll tracking
    const scrollHandler = () => {
      const now = Date.now();
      const scrollTop = window.scrollY;
      const deltaScroll = Math.abs(scrollTop - lastScrollTop.current);
      const deltaTime = now - lastTime.current;
      deltaScroll / deltaTime; // Not used but can track speed later
      lastScrollTop.current = scrollTop;
      lastTime.current = now;
    };

    // Hover detection
    const clickableSelector = "a, button, [data-cursor-hover]";
    const hoverElements = document.querySelectorAll(clickableSelector);
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setIsHovering(true);
        setHoverText(el.getAttribute("data-cursor-hover") || "View");
      });
      el.addEventListener("mouseleave", () => {
        setIsHovering(false);
        setHoverText("");
      });
    });

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("scroll", scrollHandler);

    // Smooth animation loop
    let animationFrame;
    const animate = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      setCursorPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("scroll", scrollHandler);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
      cancelAnimationFrame(animationFrame);
    };
  }, [position]);

  return (
    <>
      {/* Background Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(
            120px at ${smoothPos.x}px ${smoothPos.y}px,
            rgba(255,255,255,0.08),
            transparent 70%
          )`,
          transition: "background 0.15s ease-out",
        }}
      />

      {/* Custom Cursor */}
      <div
        className="fixed z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: isHovering ? "80px" : "20px",
          height: isHovering ? "80px" : "20px",
          borderRadius: "50%",
          border: `2px solid ${cursorColor}`,
          backgroundColor: isHovering ? `${cursorColor}10` : `${cursorColor}05`,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.3s cubic-bezier(0.25, 1, 0.5, 1), height 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, background-color 0.3s ease",
        }}
      >
        {/* Hover Label */}
        <span
          style={{
            color: cursorColor,
            fontSize: "12px",
            fontWeight: "500",
            opacity: isHovering ? 1 : 0,
            transform: `scale(${isHovering ? 1 : 0.5})`,
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          {hoverText}
        </span>
      </div>
    </>
  );
}

export default MouseEffect;
