import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ hue }) {
  const ref = useRef();
  const count = 1000;

  // Create positions
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  // Create velocities
  const velocities = React.useMemo(() => {
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      vel[i] = (Math.random() - 0.5) * 0.01;
    }
    return vel;
  }, [count]);

  // Animate positions + color sync
  useFrame(({ clock }) => {
    const positionsArray = ref.current.geometry.attributes.position.array;
    const material = ref.current.material;

    // Move particles
    for (let i = 0; i < count * 3; i++) {
      positionsArray[i] += velocities[i];
      if (positionsArray[i] > 5 || positionsArray[i] < -5) {
        velocities[i] = -velocities[i];
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;

    // Sync particle color & pulse opacity
    const pulse = 0.6 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    material.color.setHSL(hue / 360, 1, 0.6); // hue sync
    material.opacity = pulse; // soft breathing effect
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
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function ParticlesCanvas({ hue }) {
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
      <Particles hue={hue} />
    </Canvas>
  );
}
