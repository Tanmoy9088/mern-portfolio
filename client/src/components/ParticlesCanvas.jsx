import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ConstellationParticles() {
  const ref = useRef();
  const lineRef = useRef();
  const count = 150; // Fewer particles for better performance with lines
  const maxDistance = 1.5;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  const velocities = useMemo(() => {
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      vel[i] = (Math.random() - 0.5) * 0.005;
    }
    return vel;
  }, [count]);

  const linePositions = useMemo(() => new Float32Array(count * count * 3 * 2), [count]);

  useFrame(() => {
    const posArray = ref.current.geometry.attributes.position.array;
    let lineIndex = 0;

    for (let i = 0; i < count; i++) {
      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      // Bounce particles within bounds
      for (let j = 0; j < 3; j++) {
        if (posArray[i * 3 + j] > 4 || posArray[i * 3 + j] < -4) {
          velocities[i * 3 + j] = -velocities[i * 3 + j];
        }
      }

      // Connect particles if close
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

    ref.current.geometry.attributes.position.needsUpdate = true;

    // Update lines
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
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#FFD700" sizeAttenuation />
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
        <lineBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.4}
        />
      </lineSegments>
    </>
  );
}

export default function ConstellationCanvas() {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 8], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <ConstellationParticles />
    </Canvas>
  );
}
