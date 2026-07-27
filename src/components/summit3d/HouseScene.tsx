"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

/* ---------------- palette ---------------- */
const C = {
  wall: "#eef1ec",
  wall2: "#e2e7df",
  roof: "#2b4133",
  trim: "#1e4d34",
  glass: "#16323f",
  door: "#132d1e",
  foundation: "#c8c3b6",
  grass: "#25603f",
  bed: "#3a2a1c",
  shrub: "#2f7a52",
  trunk: "#4a3626",
  drive: "#8f8c83",
  amber: "#c8892e",
  sage: "#6fa285",
  white: "#ffffff",
};

type Vec3 = [number, number, number];
type ZoneDef = {
  key: string;
  name: string;
  no: string;
  color: string;
  // camera position + look-at target
  cam: Vec3;
  target: Vec3;
  markers: Vec3[];
};

const HERO: { cam: Vec3; target: Vec3 } = { cam: [12, 7.5, 14], target: [0, 3, 0] };

const ZONES: ZoneDef[] = [
  {
    key: "property",
    name: "Property Line",
    no: "01",
    color: C.sage,
    cam: [3, 19, 17],
    target: [0, 0.5, 1],
    markers: [
      [-7, 0.25, 7],
      [7, 0.25, 8],
      [0, 0.25, 10.5],
      [-8.5, 0.25, -1],
      [8, 0.25, 2],
      [-4.5, 0.25, 5.2],
    ],
  },
  {
    key: "foundation",
    name: "Foundation Line",
    no: "02",
    color: C.sage,
    cam: [6.5, 1.6, 10.5],
    target: [0, 1, 2.6],
    markers: [
      [-2.8, 0.5, 2.75],
      [2.8, 0.5, 2.75],
      [0, 0.45, 3.0],
      [3.95, 0.5, 2.7],
      [-3.15, 0.5, 0],
      [1.6, 0.5, 2.75],
    ],
  },
  {
    key: "peak",
    name: "Peak Line",
    no: "03",
    color: C.amber,
    cam: [10.5, 6, 11.5],
    target: [0, 5, 0],
    markers: [
      [-1.8, 2.3, 2.58],
      [1.8, 2.3, 2.58],
      [-1.8, 4.9, 2.58],
      [1.8, 4.9, 2.58],
      [0, 2.1, 2.58],
      [0, 6.7, 2.7],
      [0, 7.7, 0],
      [4.1, 3.2, 2.55],
    ],
  },
];

/* ---------------- house ---------------- */
function Box({ pos, size, color, ...rest }: { pos: Vec3; size: Vec3; color: string } & Record<string, unknown>) {
  return (
    <mesh position={pos} castShadow receiveShadow {...rest}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={0.85} />
    </mesh>
  );
}

function House() {
  const roofShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-3.4, 0);
    s.lineTo(3.4, 0);
    s.lineTo(0, 2.1);
    s.closePath();
    return s;
  }, []);

  const windows: Vec3[] = [
    [-1.8, 2.3, 0],
    [1.8, 2.3, 0],
    [-1.8, 4.9, 0],
    [1.8, 4.9, 0],
    [0, 4.9, 0],
  ];

  return (
    <group>
      {/* foundation */}
      <Box pos={[0, 0.3, 0]} size={[6.4, 0.6, 5.4]} color={C.foundation} />
      {/* crawlspace vents */}
      {[-2, 0, 2].map((x) => (
        <Box key={x} pos={[x, 0.32, 2.71]} size={[0.5, 0.24, 0.06]} color={C.door} />
      ))}
      {/* floor 1 + floor 2 */}
      <Box pos={[0, 2.1, 0]} size={[6, 3, 5]} color={C.wall} />
      <Box pos={[0, 4.9, 0]} size={[6, 2.6, 5]} color={C.wall2} />
      {/* floor divider trim */}
      <Box pos={[0, 3.62, 0]} size={[6.08, 0.14, 5.08]} color={C.trim} />

      {/* windows (front) */}
      {windows.map((w, i) => (
        <mesh key={i} position={[w[0], w[1], 2.52]}>
          <boxGeometry args={[1.1, 1.3, 0.08]} />
          <meshStandardMaterial color={C.glass} roughness={0.2} metalness={0.1} />
        </mesh>
      ))}
      {/* door */}
      <mesh position={[0, 1.35, 2.53]}>
        <boxGeometry args={[1.1, 1.9, 0.1]} />
        <meshStandardMaterial color={C.door} roughness={0.6} />
      </mesh>

      {/* eaves overhang */}
      <Box pos={[0, 6.24, 0]} size={[6.5, 0.16, 5.5]} color={C.trim} />
      {/* gable roof (ridge front-to-back) */}
      <mesh position={[0, 6.3, -2.6]} castShadow>
        <extrudeGeometry args={[roofShape, { depth: 5.2, bevelEnabled: false }]} />
        <meshStandardMaterial color={C.roof} roughness={0.9} />
      </mesh>

      {/* garage (attached right/front) */}
      <Box pos={[4.3, 1.6, 1.1]} size={[2.8, 3.2, 3]} color={C.wall} />
      <mesh position={[4.3, 1.3, 2.62]}>
        <boxGeometry args={[2.2, 2.2, 0.1]} />
        <meshStandardMaterial color={C.wall2} roughness={0.7} />
      </mesh>
      {/* small garage roof */}
      <Box pos={[4.3, 3.35, 1.1]} size={[3, 0.24, 3.2]} color={C.trim} />

      {/* downspout */}
      <mesh position={[3.05, 3, 2.6]}>
        <cylinderGeometry args={[0.08, 0.08, 5.6, 8]} />
        <meshStandardMaterial color={C.trim} />
      </mesh>

      {/* mulch bed + shrubs along front */}
      <Box pos={[-1.2, 0.06, 3.3]} size={[4.4, 0.12, 1.2]} color={C.bed} />
      {[-2.6, -1.6, -0.6, 0.4].map((x) => (
        <mesh key={x} position={[x, 0.4, 3.3]}>
          <sphereGeometry args={[0.42, 12, 10]} />
          <meshStandardMaterial color={C.shrub} roughness={1} />
        </mesh>
      ))}

      {/* driveway to garage */}
      <Box pos={[4.3, 0.02, 6]} size={[3, 0.04, 7]} color={C.drive} />

      {/* a tree in the yard */}
      <group position={[-7, 0, 4]}>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.22, 0.3, 2, 8]} />
          <meshStandardMaterial color={C.trunk} />
        </mesh>
        <mesh position={[0, 2.6, 0]}>
          <sphereGeometry args={[1.4, 14, 12]} />
          <meshStandardMaterial color={C.shrub} roughness={1} />
        </mesh>
      </group>
    </group>
  );
}

/* ---------------- markers ---------------- */
function Marker({ pos, color }: { pos: Vec3; color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.18;
    ref.current.scale.setScalar(s);
  });
  return (
    <group ref={ref} position={pos}>
      <mesh>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ---------------- rig: camera + active markers ---------------- */
function Scene({ active }: { active: number }) {
  const controls = useRef<CameraControls>(null);
  const first = useRef(true);

  const applyPose = (transition: boolean) => {
    const c = controls.current;
    if (!c) return;
    const pose = active < 0 ? HERO : { cam: ZONES[active].cam, target: ZONES[active].target };
    c.setLookAt(pose.cam[0], pose.cam[1], pose.cam[2], pose.target[0], pose.target[1], pose.target[2], transition);
  };

  // Initial framing: wait for CameraControls to finish its own setup, then snap
  // to the hero pose (otherwise the first view renders empty).
  useEffect(() => {
    const t = setTimeout(() => applyPose(true), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Zone changes: smooth fly-to.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    applyPose(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      <hemisphereLight args={["#cfe3d6", "#0c1a12", 0.9]} />
      <directionalLight position={[9, 13, 7]} intensity={1.5} />
      <ambientLight intensity={0.25} />

      <House />
      {active >= 0 && ZONES[active].markers.map((m, i) => <Marker key={i} pos={m} color={ZONES[active].color} />)}

      <ContactShadows position={[0, 0.02, 0]} opacity={0.42} scale={44} blur={2.2} far={12} />
      {/* ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[22, 56]} />
        <meshStandardMaterial color={C.grass} roughness={1} />
      </mesh>

      <CameraControls ref={controls} makeDefault minPolarAngle={0.2} maxPolarAngle={Math.PI / 2.05} />
    </>
  );
}

/* ---------------- public component ---------------- */
export default function HouseScene() {
  const [active, setActive] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1610]">
      <div className="relative h-[420px] w-full sm:h-[520px]">
        <Canvas
          shadows
          dpr={[1, 1.5]}
          camera={{ position: ZONES[0].cam, fov: 42 }}
          gl={{ antialias: true }}
        >
          <Scene active={active} />
        </Canvas>

        {/* overlay label */}
        <div className="pointer-events-none absolute left-5 top-5 max-w-[240px]">
          <p className="font-display text-[12px] font-bold uppercase tracking-[0.12em] text-summit-sage">
            Summit Shield
          </p>
          <p className="mt-1 font-display text-[19px] font-extrabold text-white">
            {active < 0 ? "Three-zone home protection" : `Zone ${ZONES[active].no} · ${ZONES[active].name}`}
          </p>
        </div>
      </div>

      {/* zone controls */}
      <div className="grid grid-cols-3 gap-px bg-white/10">
        {ZONES.map((z, i) => (
          <button
            key={z.key}
            type="button"
            onClick={() => setActive(i)}
            className={`px-3 py-4 text-center transition-colors ${
              active === i ? "bg-apex-green" : "bg-[#0e1c14] hover:bg-[#12251a]"
            }`}
          >
            <span
              className="block font-display text-[12px] font-extrabold tracking-[0.08em]"
              style={{ color: active === i ? "#fff" : z.color }}
            >
              {z.no}
            </span>
            <span className={`mt-0.5 block font-display text-[13px] font-bold ${active === i ? "text-white" : "text-white/70"}`}>
              {z.name}
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setActive(-1)}
        className="w-full bg-[#0a1610] py-3 text-center font-display text-[12px] font-bold uppercase tracking-[0.1em] text-white/50 hover:text-white"
      >
        Reset view
      </button>
    </div>
  );
}
