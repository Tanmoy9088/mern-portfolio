import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
  const ref = useRef();
  const lineRef = useRef();
  const count = 300;
  const maxDistance = 1.2;

  const shapes = ["sphere", "pyramid", "ring", "helix", "wave"];

  const [shapeIndex, setShapeIndex] = useState(0);
  const currentShape = useMemo(
    () => generateShapePositions(shapes[shapeIndex], count),
    [shapeIndex]
  );
  const nextShape = useMemo(
    () => generateShapePositions(shapes[(shapeIndex + 1) % shapes.length], count),
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

  useFrame(() => {
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

      posArray[i * 3] = THREE.MathUtils.lerp(currentShape[i * 3], nextShape[i * 3], t);
      posArray[i * 3 + 1] = THREE.MathUtils.lerp(currentShape[i * 3 + 1], nextShape[i * 3 + 1], t);
      posArray[i * 3 + 2] = THREE.MathUtils.lerp(currentShape[i * 3 + 2], nextShape[i * 3 + 2], t);

      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];
    }

    // Update points
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
  });

  return (
    <>
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
        <pointsMaterial size={0.06} color="#FFFFFF" />
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
        <lineBasicMaterial color="#00AFFF" transparent opacity={0.3} />
      </lineSegments>
    </>
  );
}

export default function ConstellationCanvas() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, zIndex: 15, pointerEvents: "none" }}
      camera={{ position: [0, 0, 6], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <MorphingConstellation />
    </Canvas>
  );
}
