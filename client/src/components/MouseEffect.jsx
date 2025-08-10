import React, { useEffect, useState, useRef } from "react";

function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [brightness, setBrightness] = useState(1);

  const currentHoveredLink = useRef(null);
  const originalLinkStyles = useRef(new Map());

  useEffect(() => {
    const getBrightness = (color) => {
      if (!color.startsWith("rgb")) return 1;
      const rgb = color.match(/\d+/g).map(Number);
      return (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 255;
    };

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      try {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (!el) {
          if (currentHoveredLink.current) {
            const orig = originalLinkStyles.current.get(currentHoveredLink.current);
            if (orig) {
              currentHoveredLink.current.style.backgroundColor = orig.backgroundColor;
              currentHoveredLink.current.style.color = orig.color;
            }
            currentHoveredLink.current = null;
            originalLinkStyles.current.clear();
          }
          setBrightness(1);
          setIsHovering(false);
          setHoverText("");
          return;
        }

        const color = window.getComputedStyle(el).color || "rgb(255,255,255)";
        const bright = getBrightness(color);
        setBrightness(bright);

        if (el.tagName.toLowerCase() === "a") {
          if (currentHoveredLink.current !== el) {
            if (currentHoveredLink.current) {
              const orig = originalLinkStyles.current.get(currentHoveredLink.current);
              if (orig) {
                currentHoveredLink.current.style.backgroundColor = orig.backgroundColor;
                currentHoveredLink.current.style.color = orig.color;
              }
            }

            originalLinkStyles.current.set(el, {
              backgroundColor: el.style.backgroundColor,
              color: el.style.color,
            });

            currentHoveredLink.current = el;
            el.style.transition = "background-color 0.3s ease, color 0.3s ease";

            if (bright < 0.5) {
              el.style.backgroundColor = "rgba(255,255,255,0.3)";
              el.style.color = "#000";
            } else {
              el.style.backgroundColor = "rgba(0,0,0,0.15)";
              el.style.color = "#fff";
            }
          }
          setIsHovering(true);
          setHoverText(el.getAttribute("data-cursor-hover") || "View");
        } else {
          if (currentHoveredLink.current) {
            const orig = originalLinkStyles.current.get(currentHoveredLink.current);
            if (orig) {
              currentHoveredLink.current.style.backgroundColor = orig.backgroundColor;
              currentHoveredLink.current.style.color = orig.color;
            }
            currentHoveredLink.current = null;
            originalLinkStyles.current.clear();
          }
          setIsHovering(false);
          setHoverText("");
        }
      } catch {
        setBrightness(1);
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveHandler);

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
      if (currentHoveredLink.current) {
        const orig = originalLinkStyles.current.get(currentHoveredLink.current);
        if (orig) {
          currentHoveredLink.current.style.backgroundColor = orig.backgroundColor;
          currentHoveredLink.current.style.color = orig.color;
        }
        currentHoveredLink.current = null;
        originalLinkStyles.current.clear();
      }
      cancelAnimationFrame(animationFrame);
    };
  }, [position]);

  // Cursor colors based on brightness
  const cursorBorderColor = brightness > 0.5 ? "black" : "white";

  // Cursor background becomes more focused (less transparent) on hover
  const cursorBgColor = isHovering
    ? brightness > 0.5
      ? "rgba(0, 0, 0, 0.3)"
      : "rgba(255, 255, 255, 0.2)"
    : brightness > 0.5
    ? "rgba(0, 0, 0, 0.2)"
    : "rgba(255, 255, 255, 0.2)";

  const hoverLabelColor = isHovering
    ? brightness > 0.5
      ? "white"
      : "black"
    : brightness > 0.5
    ? "black"
    : "white";

  return (
    <>
      {/* Page background spotlight that moves with cursor */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: isHovering
            ? `radial-gradient(circle 150px at ${smoothPos.x}px ${smoothPos.y}px, rgba(255,255,255,0.15), transparent 70%)`
            : `radial-gradient(circle 120px at ${smoothPos.x}px ${smoothPos.y}px, rgba(255,255,255,0.08), transparent 70%)`,
          transition: "background 0.3s ease",
          mixBlendMode: "screen",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Custom Cursor */}
      <div
        className="fixed z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: isHovering ? "60px" : "30px",
          height: isHovering ? "60px" : "30px",
          borderRadius: "50%",
          border: `2px solid ${cursorBorderColor}`,
          backgroundColor: cursorBgColor,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.3s cubic-bezier(0.25,1,0.5,1), height 0.3s cubic-bezier(0.25,1,0.5,1), border-color 0.3s ease, background-color 0.3s ease",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <span
          style={{
            color: hoverLabelColor,
            fontSize: "12px",
            fontWeight: "500",
            opacity: isHovering ? 1 : 0,
            transform: `scale(${isHovering ? 0.7 : 0.5})`,
            transition: "opacity 0.25s ease, transform 0.25s ease",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {hoverText}
        </span>
      </div>
    </>
  );
}

export default MouseEffect;
