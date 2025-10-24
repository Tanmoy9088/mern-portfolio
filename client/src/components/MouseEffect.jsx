import React, { useEffect, useState, useRef } from "react";

// --- Configuration Constants ---
// We'll use these for the default state and the universal visibility effect.
const DEFAULT_CURSOR_COLOR = "rgb(0, 0, 0)"; // Default outline color (Black)
const VISIBILITY_CURSOR_FILL_COLOR = "rgb(255, 255, 255)"; // White fill for blend mode effect (Always used)
const DEFAULT_LABEL_COLOR = "rgb(255, 255, 255)"; // White label color (for default black outline)
const HOVER_LABEL_COLOR = "rgb(0, 0, 0)"; // Black label color (for contrast against white fill)
function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false); // Renamed state for clarity
  const [hoverText, setHoverText] = useState(""); // State for dynamic label color
  const [currentLabelColor, setCurrentLabelColor] =
    useState(DEFAULT_LABEL_COLOR);

  const currentHoveredLink = useRef(null);
  const originalLinkStyles = useRef(new Map());

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      try {
        const el = document.elementFromPoint(e.clientX, e.clientY); // --- 1. Cleanup/Reset Logic ---
        if (!el) {
          if (currentHoveredLink.current) {
            const orig = originalLinkStyles.current.get(
              currentHoveredLink.current
            );
            if (orig) {
              currentHoveredLink.current.style.backgroundColor =
                orig.backgroundColor;
              currentHoveredLink.current.style.color = orig.color;
            }
            currentHoveredLink.current = null;
            originalLinkStyles.current.clear();
          } // Reset label and link state
          setCurrentLabelColor(DEFAULT_LABEL_COLOR);
          setIsHoveringLink(false);
          setHoverText("");
          return;
        } // --- 2. Interactive Element Logic (Link Hover) ---

        if (
          el.tagName.toLowerCase() === "a" ||
          el.getAttribute("data-cursor-hover")
        ) {
          // Set label color to BLACK to contrast the WHITE cursor fill
          setCurrentLabelColor(HOVER_LABEL_COLOR);

          if (currentHoveredLink.current !== el) {
            // ... (Link logic remains the same)
            if (currentHoveredLink.current) {
              const orig = originalLinkStyles.current.get(
                currentHoveredLink.current
              );
              if (orig) {
                currentHoveredLink.current.style.backgroundColor =
                  orig.backgroundColor;
                currentHoveredLink.current.style.color = orig.color;
              }
            }
            originalLinkStyles.current.set(el, {
              backgroundColor: el.style.backgroundColor,
              color: el.style.color,
            });
            currentHoveredLink.current = el;
            el.style.transition = "background-color 0.3s ease, color 0.3s ease";
          }
          setIsHoveringLink(true);
          setHoverText(el.getAttribute("data-cursor-hover") || "View");
        } else {
          // Set label color to BLACK to contrast the WHITE cursor fill (always active)
          setCurrentLabelColor(HOVER_LABEL_COLOR);

          if (currentHoveredLink.current) {
            const orig = originalLinkStyles.current.get(
              currentHoveredLink.current
            );
            if (orig) {
              currentHoveredLink.current.style.backgroundColor =
                orig.backgroundColor;
              currentHoveredLink.current.style.color = orig.color;
            }
            currentHoveredLink.current = null;
            originalLinkStyles.current.clear();
          }
          setIsHoveringLink(false);
          setHoverText("");
        }
      } catch (error) {
        console.error("Cursor error:", error);
        setCurrentLabelColor(DEFAULT_LABEL_COLOR);
        setIsHoveringLink(false);
        setHoverText("");
      }
    }; // ... (Animation loop remains the same)

    window.addEventListener("mousemove", moveHandler);
    let animationFrame;
    const animate = () => {
      setCursorPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      setSmoothPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      if (currentHoveredLink.current) {
        const orig = originalLinkStyles.current.get(currentHoveredLink.current);
        if (orig) {
          currentHoveredLink.current.style.backgroundColor =
            orig.backgroundColor;
          currentHoveredLink.current.style.color = orig.color;
        }
      }
      cancelAnimationFrame(animationFrame);
    };
  }, [position]);

  return (
    <>
      {/* 1. Page background spotlight (optional smooth effect) */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle ${
            isHoveringLink ? 150 : 120
          }px at ${smoothPos.x}px ${
            smoothPos.y
          }px, rgba(255,255,255,0.08), transparent 70%)`,
          transition: "background 0.3s ease",
          mixBlendMode: "screen",
        }}
      />
      {/* 2. Custom Cursor (the circle) */}
      <div
        className="fixed z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          left: cursorPos.x,
          top: cursorPos.y, // Size change only on link hover
          width: isHoveringLink ? "60px" : "30px",
          height: isHoveringLink ? "60px" : "30px",
          borderRadius: "50%", // --- UNIVERSAL VISIBILITY FIX --- // Always use white fill for difference blend mode to work
          border: `2px solid ${DEFAULT_CURSOR_COLOR}`,
          backgroundColor: VISIBILITY_CURSOR_FILL_COLOR,
          mixBlendMode: "difference",
          opacity: 0.9,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.3s cubic-bezier(0.25,1,0.5,1), height 0.3s cubic-bezier(0.25,1,0.5,1)",
        }}
      >
        <span
          style={{
            color: currentLabelColor, // Always Black on hover, White otherwise (for contrast)
            fontSize: "12px",
            fontWeight: "500",
            opacity: isHoveringLink ? 1 : 0, // Only show label when hovering a link
            transform: `scale(${isHoveringLink ? 0.7 : 0.5})`,
            transition:
              "opacity 0.25s ease, transform 0.25s ease, color 0.3s ease",
          }}
        >
          {hoverText}
        </span>
      </div>
    </>
  );
}

export default MouseEffect;
