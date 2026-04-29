import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ── Helpers ──────────────────────────────────────────────────────────────────
function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

// ── Grid ─────────────────────────────────────────────────────────────────────
function GlobeGrid({ r = 2.02 }: { r?: number }) {
  const geos = useMemo(() => {
    const result: THREE.BufferGeometry[] = [];

    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lon = 0; lon <= 360; lon += 2) pts.push(latLonToVec3(lat, lon - 180, r));
      result.push(new THREE.BufferGeometry().setFromPoints(pts));
    }

    for (let lon = 0; lon < 360; lon += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 2) pts.push(latLonToVec3(lat, lon - 180, r));
      result.push(new THREE.BufferGeometry().setFromPoints(pts));
    }

    return result.map((geo) => {
      const mat = new THREE.LineBasicMaterial({ color: "#1a3a70", transparent: true, opacity: 0.3 });
      return new THREE.Line(geo, mat);
    });
  }, [r]);

  return (
    <>
      {geos.map((lineObj, i) => (
        <primitive key={i} object={lineObj} />
      ))}
    </>
  );
}

// ── Pulsing equatorial rings ──────────────────────────────────────────────────
function PulseRings() {
  const r1 = useRef<THREE.Mesh>(null!);
  const r2 = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const p1 = (t * 0.4) % 1;
    const p2 = ((t * 0.4) + 0.5) % 1;

    if (r1.current) {
      r1.current.scale.setScalar(1 + p1 * 0.35);
      (r1.current.material as THREE.MeshBasicMaterial).opacity = (1 - p1) * 0.55;
    }
    if (r2.current) {
      r2.current.scale.setScalar(1 + p2 * 0.35);
      (r2.current.material as THREE.MeshBasicMaterial).opacity = (1 - p2) * 0.55;
    }
  });

  const ringGeo = useMemo(() => new THREE.RingGeometry(2.01, 2.09, 80), []);

  return (
    <>
      <mesh ref={r1} geometry={ringGeo} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#4db8ff" transparent side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={r2} geometry={ringGeo} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#4db8ff" transparent side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

// ── Destination markers ───────────────────────────────────────────────────────
const DESTINATIONS = [
  { lat: 37.1, lon: -95.7 },   // US
  { lat: 25.2, lon: 55.3 },    // UAE
  { lat: 35.9, lon: 104.2 },   // China
  { lat: 36.5, lon: 127.8 },   // South Korea
  { lat: 51.2, lon: 10.4 },    // Germany
  { lat: 55.4, lon: -3.4 },    // UK
  { lat: 42.8, lon: 12.6 },    // Italy
];

const INDIA = { lat: 20.6, lon: 78.9 };

function Markers({ r = 2.06 }: { r?: number }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((m, i) => {
      if (!m) return;
      m.scale.setScalar(0.85 + Math.sin(t * 2.2 + i * 1.1) * 0.15);
    });
  });

  return (
    <>
      {DESTINATIONS.map((d, i) => {
        const pos = latLonToVec3(d.lat, d.lon, r);
        return (
          <group key={i} position={pos}>
            <mesh ref={(el) => (refs.current[i] = el)}>
              <sphereGeometry args={[0.038, 10, 10]} />
              <meshBasicMaterial color="#FFD700" />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.072, 10, 10]} />
              <meshBasicMaterial color="#FFD700" transparent opacity={0.18} />
            </mesh>
          </group>
        );
      })}

      {/* India origin – bigger, highlighted */}
      <group position={latLonToVec3(INDIA.lat, INDIA.lon, r + 0.02)}>
        <mesh>
          <sphereGeometry args={[0.065, 12, 12]} />
          <meshBasicMaterial color="#F3CD00" />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.13, 12, 12]} />
          <meshBasicMaterial color="#F3CD00" transparent opacity={0.22} />
        </mesh>
      </group>
    </>
  );
}

// ── Animated trade arcs ───────────────────────────────────────────────────────
function Arc({
  to,
  offset,
  r = 2.05,
}: {
  to: { lat: number; lon: number };
  offset: number;
  r?: number;
}) {
  const ref = useRef<THREE.Line>(null!);

  const lineObj = useMemo(() => {
    const start = latLonToVec3(INDIA.lat, INDIA.lon, r);
    const end = latLonToVec3(to.lat, to.lon, r);
    const mid = start.clone().add(end).normalize().multiplyScalar(r * 1.28);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
    const mat = new THREE.LineBasicMaterial({ color: "#F3CD00", transparent: true, opacity: 0.5 });
    return new THREE.Line(geo, mat);
  }, [to, r]);

  useFrame(({ clock }) => {
    const mat = lineObj.material as THREE.LineBasicMaterial;
    mat.opacity = 0.35 + Math.sin(clock.getElapsedTime() * 1.4 + offset) * 0.3;
  });

  return <primitive ref={ref} object={lineObj} />;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ExtrudedGlobe() {
  const root = useRef<THREE.Group>(null!);

  const dotGeo = useMemo(() => {
    const sphere = new THREE.SphereGeometry(2, 96, 96);
    const arr = sphere.attributes.position.array as Float32Array;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(arr, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!root.current) return;
    root.current.rotation.y += delta * 0.42;
    root.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.38) * 0.065;
    root.current.position.y = Math.sin(state.clock.elapsedTime * 0.72) * 0.075;
  });

  return (
    <group ref={root}>
      {/* Dot surface */}
      <points geometry={dotGeo}>
        <pointsMaterial size={0.022} color="#4db8ff" transparent opacity={0.92} sizeAttenuation />
      </points>

      {/* Glowing core */}
      <mesh>
        <sphereGeometry args={[1.97, 64, 64]} />
        <meshStandardMaterial
          color="#040e2a"
          transparent
          opacity={0.28}
          emissive="#0033cc"
          emissiveIntensity={1.8}
          roughness={0.05}
          metalness={0.9}
        />
      </mesh>

      {/* Grid */}
      <GlobeGrid r={2.02} />

      {/* Rings */}
      <PulseRings />

      {/* Markers */}
      <Markers r={2.06} />

      {/* Arcs */}
      {DESTINATIONS.map((d, i) => (
        <Arc key={i} to={d} offset={i * 0.9} />
      ))}

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.22, 64, 64]} />
        <meshBasicMaterial color="#1155ff" transparent opacity={0.045} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}
