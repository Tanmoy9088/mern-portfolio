import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// =====================
// Shape Generator
// =====================
function generateShapePositions(shape, count) {
  const positions = new Float32Array(count * 3);
  const radius = 3;

  switch (shape) {
    case "sphere":
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      break;

    case "pyramid":
      for (let i = 0; i < count; i++) {
        const level = Math.floor((i / count) * 5);
        const size = radius - level * 0.5;
        positions[i * 3] = (Math.random() - 0.5) * size;
        positions[i * 3 + 1] = level * 0.5 - radius / 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * size;
      }
      break;

    case "ring":
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        positions[i * 3] = radius * Math.cos(angle);
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = radius * Math.sin(angle);
      }
      break;

    case "helix":
      for (let i = 0; i < count; i++) {
        const t = i / count;
        const angle = t * Math.PI * 8;
        positions[i * 3] = Math.cos(angle) * radius * 0.6;
        positions[i * 3 + 1] = (t - 0.5) * radius * 3;
        positions[i * 3 + 2] = Math.sin(angle) * radius * 0.6;
      }
      break;

    case "wave":
      for (let i = 0; i < count; i++) {
        const x = ((i % 20) - 10) * 0.3;
        const y = Math.sin((i / 20) * Math.PI) * 1.5;
        const z = Math.cos((i / 20) * Math.PI) * 1.5;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }
      break;

    case "cube":
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * radius * 2;
        positions[i * 3 + 1] = (Math.random() - 0.5) * radius * 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * radius * 2;
      }
      break;

    // Spider-Man web
    case "spiderWeb": {
      const rings = 6;
      const strands = 12;
      let idx = 0;

      // Concentric rings
      for (let r = 1; r <= rings; r++) {
        const ringRadius = (r / rings) * radius;
        for (let s = 0; s < strands; s++) {
          const angle = (s / strands) * Math.PI * 2;
          positions[idx++] = Math.cos(angle) * ringRadius;
          positions[idx++] = Math.sin(angle) * ringRadius;
          positions[idx++] = (Math.random() - 0.5) * 0.05;
          if (idx >= count * 3) break;
        }
      }

      // Radial lines
      for (let s = 0; s < strands; s++) {
        const angle = (s / strands) * Math.PI * 2;
        for (let r = 0; r <= rings; r++) {
          const ringRadius = (r / rings) * radius;
          positions[idx++] = Math.cos(angle) * ringRadius;
          positions[idx++] = Math.sin(angle) * ringRadius;
          positions[idx++] = (Math.random() - 0.5) * 0.05;
          if (idx >= count * 3) break;
        }
      }

      // Fill leftovers
      while (idx < count * 3) {
        const angle = Math.random() * Math.PI * 2;
        const ringRadius = Math.random() * radius;
        positions[idx++] = Math.cos(angle) * ringRadius;
        positions[idx++] = Math.sin(angle) * ringRadius;
        positions[idx++] = (Math.random() - 0.5) * 0.05;
      }
      break;
    }

    default:
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * radius * 2;
      }
  }

  return positions;
}

// =====================
// Morphing + Lines
// =====================
function MorphingConstellation() {
  const groupRef = useRef();
  const ref = useRef();
  const lineRef = useRef();
  const count = 300;
  const maxDistance = 1.2;

  const shapes = ["sphere", "cube", "pyramid", "spiderWeb", "wave", "helix"];

  const [shapeIndex, setShapeIndex] = useState(0);
  const currentShape = useMemo(
    () => generateShapePositions(shapes[shapeIndex], count),
    [shapeIndex]
  );
  const nextShape = useMemo(
    () =>
      generateShapePositions(shapes[(shapeIndex + 1) % shapes.length], count),
    [shapeIndex]
  );

  const delays = useMemo(
    () => new Float32Array(count).map(() => Math.random()),
    [count]
  );
  const blendRef = useRef(0);

  const velocities = useMemo(
    () => new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 0.002),
    [count]
  );

  const linePositions = useMemo(
    () => new Float32Array(count * count * 3 * 2),
    [count]
  );

  useFrame(({ clock }) => {
    const posArray = ref.current.geometry.attributes.position.array;
    blendRef.current += 0.002;

    if (blendRef.current >= 1) {
      blendRef.current = 0;
      setShapeIndex((prev) => (prev + 1) % shapes.length);
    }

    let lineIndex = 0;

    for (let i = 0; i < count; i++) {
      let t = (blendRef.current - delays[i]) * 1.5;
      t = Math.min(Math.max(t, 0), 1);

      posArray[i * 3] = THREE.MathUtils.lerp(
        currentShape[i * 3],
        nextShape[i * 3],
        t
      );
      posArray[i * 3 + 1] = THREE.MathUtils.lerp(
        currentShape[i * 3 + 1],
        nextShape[i * 3 + 1],
        t
      );
      posArray[i * 3 + 2] = THREE.MathUtils.lerp(
        currentShape[i * 3 + 2],
        nextShape[i * 3 + 2],
        t
      );

      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    // Build connection lines
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions[lineIndex++] = posArray[i * 3];
          linePositions[lineIndex++] = posArray[i * 3 + 1];
          linePositions[lineIndex++] = posArray[i * 3 + 2];

          linePositions[lineIndex++] = posArray[j * 3];
          linePositions[lineIndex++] = posArray[j * 3 + 1];
          linePositions[lineIndex++] = posArray[j * 3 + 2];
        }
      }
    }

    lineRef.current.geometry.setDrawRange(0, lineIndex / 3);
    lineRef.current.geometry.attributes.position.needsUpdate = true;

    // Group motion
    groupRef.current.rotation.y += 0.002;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;

    const scale = 1 + Math.sin(clock.elapsedTime * 0.5) * 0.05;
    groupRef.current.scale.set(scale, scale, scale);

    // Web special effect
    if (shapes[shapeIndex] === "spiderWeb") {
      lineRef.current.material.color.set("#ffffff");
      lineRef.current.material.opacity = 1;
    } else {
      lineRef.current.material.color.set("#FFFFFF");
      lineRef.current.material.opacity = 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Particles */}
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={generateShapePositions(shapes[shapeIndex], count)}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#FFFFFF"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.9}
        />
      </points>

      {/* Connecting Lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#FFFFFF" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

// =====================
// Canvas Wrapper
// =====================
export default function ConstellationCanvas() {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 15,
        pointerEvents: "none",
        background: "#ffffff",
      }}
      camera={{ position: [0, 0, 8], fov: 75 }}
    >
      <fog attach="fog" args={["#000000", 5, 15]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00aaff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ff00ff" />
      <MorphingConstellation />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
