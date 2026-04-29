import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function NetworkNodes() {
  const ref = useRef<THREE.Points>(null);
  
  // Create a sphere of points
  const [positions] = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(-1 + (2 * i) / 2000);
      const theta = Math.sqrt(2000 * Math.PI) * phi;
      
      const r = 1.5;
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#F3CD00"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      {/* Inner faint globe */}
      <mesh>
        <sphereGeometry args={[1.48, 32, 32]} />
        <meshBasicMaterial color="#111" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function WorldGlobe() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <NetworkNodes />
        </Float>
      </Canvas>
    </div>
  );
}
