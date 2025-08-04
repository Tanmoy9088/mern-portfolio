import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef();

  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  const velocities = useMemo(() => {
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      vel[i] = (Math.random() - 0.5) * 0.01;
    }
    return vel;
  }, [count]);

  useFrame(() => {
    const positionsArray = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count * 3; i++) {
      positionsArray[i] += velocities[i];
      // Bounce
      if (positionsArray[i] > 5 || positionsArray[i] < -5) {
        velocities[i] = -velocities[i];
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={"#ffffff"}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function ParticlesCanvas() {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
}
