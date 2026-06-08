"use client";

import { useMemo } from "react";
import * as THREE from "three";
import type { ProductId } from "@/lib/site";

// Materiais reutilizados (memo por instância de módulo)
const concrete = {
  color: "#cfd3d8",
  roughness: 0.85,
  metalness: 0.05,
};
const concreteDark = {
  color: "#b7bcc4",
  roughness: 0.9,
  metalness: 0.05,
};
const eps = {
  color: "#f4f6f8",
  roughness: 0.95,
  metalness: 0,
};
const steel = {
  color: "#9aa1ab",
  roughness: 0.35,
  metalness: 0.7,
};

/** Cilindro entre dois pontos (usado na treliça). */
function Rod({
  from,
  to,
  radius = 0.012,
}: {
  from: [number, number, number];
  to: [number, number, number];
  radius?: number;
}) {
  const { position, quaternion, length } = useMemo(() => {
    const a = new THREE.Vector3(...from);
    const b = new THREE.Vector3(...to);
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    return { position: mid, quaternion: quat, length: len };
  }, [from, to]);

  return (
    <mesh position={position} quaternion={quaternion} castShadow>
      <cylinderGeometry args={[radius, radius, length, 8]} />
      <meshStandardMaterial {...steel} />
    </mesh>
  );
}

/** Treliça (vigota): 2 banzos inferiores + 1 superior + diagonais em zigue-zague. */
function Trelica({ length = 3, segments = 7 }: { length?: number; segments?: number }) {
  const halfBase = 0.07;
  const top = 0.16;
  const z0 = -length / 2;
  const step = length / segments;

  const diagonals = useMemo(() => {
    const rods: { from: [number, number, number]; to: [number, number, number] }[] = [];
    for (let i = 0; i < segments; i++) {
      const zA = z0 + i * step;
      const zB = z0 + (i + 1) * step;
      const side = i % 2 === 0 ? halfBase : -halfBase;
      // diagonal do banzo inferior (alternando lados) até o banzo superior
      rods.push({ from: [side, 0, zA], to: [0, top, (zA + zB) / 2] });
      rods.push({ from: [0, top, (zA + zB) / 2], to: [-side, 0, zB] });
    }
    return rods;
  }, [segments, step, z0]);

  return (
    <group>
      {/* banzos inferiores */}
      <Rod from={[halfBase, 0, z0]} to={[halfBase, 0, -z0]} radius={0.014} />
      <Rod from={[-halfBase, 0, z0]} to={[-halfBase, 0, -z0]} radius={0.014} />
      {/* banzo superior */}
      <Rod from={[0, top, z0]} to={[0, top, -z0]} radius={0.014} />
      {/* diagonais */}
      {diagonals.map((d, i) => (
        <Rod key={i} from={d.from} to={d.to} radius={0.01} />
      ))}
    </group>
  );
}

/** Laje treliçada: vigotas de concreto + treliças + enchimento EPS + capa parcial. */
export function LajeModel() {
  const length = 3;
  const vigotaPositions = [-0.9, 0, 0.9];

  return (
    <group position={[0, -0.1, 0]}>
      {vigotaPositions.map((x) => (
        <group key={x} position={[x, 0, 0]}>
          {/* vigota de concreto */}
          <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
            <boxGeometry args={[0.16, 0.12, length]} />
            <meshStandardMaterial {...concreteDark} />
          </mesh>
          {/* treliça sobre a vigota */}
          <group position={[0, 0, 0]}>
            <Trelica length={length} />
          </group>
        </group>
      ))}

      {/* blocos EPS de enchimento entre as vigotas */}
      {[-0.45, 0.45].map((x) => (
        <mesh key={x} position={[x, -0.02, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.72, 0.18, length]} />
          <meshStandardMaterial {...eps} />
        </mesh>
      ))}

      {/* capa de concreto parcial (mostra o acabamento sobre a estrutura) */}
      <mesh position={[0, 0.22, -length / 2 + 0.6]} castShadow receiveShadow>
        <boxGeometry args={[2.1, 0.06, 1.2]} />
        <meshStandardMaterial {...concrete} />
      </mesh>
    </group>
  );
}

/** Bloco EPS: perfil com rebaixos nas bordas inferiores (encaixe nas vigotas). */
export function BlocoEpsModel() {
  const geometry = useMemo(() => {
    const W = 1.4;
    const H = 0.6;
    const nw = 0.22; // largura do rebaixo
    const nh = 0.18; // altura do rebaixo
    const s = new THREE.Shape();
    s.moveTo(-W / 2 + nw, -H / 2);
    s.lineTo(-W / 2 + nw, -H / 2 + nh);
    s.lineTo(-W / 2, -H / 2 + nh);
    s.lineTo(-W / 2, H / 2);
    s.lineTo(W / 2, H / 2);
    s.lineTo(W / 2, -H / 2 + nh);
    s.lineTo(W / 2 - nw, -H / 2 + nh);
    s.lineTo(W / 2 - nw, -H / 2);
    s.closePath();

    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 2.2,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.015,
      bevelSegments: 1,
    });
    geo.center();
    geo.rotateY(Math.PI / 2);
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial {...eps} />
    </mesh>
  );
}

/** Pingadeira: perfil com topo inclinado e lábio frontal de gotejamento. */
export function PingadeiraModel() {
  const geometry = useMemo(() => {
    const s = new THREE.Shape();
    // perfil no plano XY (frente para +X), extrudado ao longo do comprimento
    s.moveTo(0, 0.34); // topo traseiro
    s.lineTo(1.5, 0.1); // topo frontal (inclinado p/ escoar água)
    s.lineTo(1.62, 0.1); // beiral frontal
    s.lineTo(1.62, -0.18); // face frontal (lábio que pinga)
    s.lineTo(1.46, -0.18); // base do lábio
    s.lineTo(1.46, -0.04); // sobe formando o sulco de gotejamento
    s.lineTo(0.12, -0.04); // sob a peça
    s.lineTo(0, -0.04);
    s.closePath();

    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 2.4,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelSegments: 1,
    });
    geo.center();
    geo.rotateY(Math.PI / 2);
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial {...concrete} />
    </mesh>
  );
}

/** Bloco de concreto: bloco vazado com dois furos passantes. */
export function BlocoConcretoModel() {
  const geometry = useMemo(() => {
    const W = 1.6;
    const H = 0.78;
    const t = 0.09; // espessura das paredes externas
    const web = 0.09; // septo central

    const s = new THREE.Shape();
    s.moveTo(-W / 2, -H / 2);
    s.lineTo(W / 2, -H / 2);
    s.lineTo(W / 2, H / 2);
    s.lineTo(-W / 2, H / 2);
    s.closePath();

    const innerW = W - 2 * t;
    const cellW = (innerW - web) / 2;
    const cellH = H - 2 * t;
    const yTop = cellH / 2;
    const yBot = -cellH / 2;

    const makeHole = (x0: number, x1: number) => {
      const h = new THREE.Path();
      h.moveTo(x0, yBot);
      h.lineTo(x1, yBot);
      h.lineTo(x1, yTop);
      h.lineTo(x0, yTop);
      h.closePath();
      return h;
    };

    const leftX = -W / 2 + t;
    s.holes.push(makeHole(leftX, leftX + cellW));
    s.holes.push(makeHole(leftX + cellW + web, leftX + cellW + web + cellW));

    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.56,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.012,
      bevelSegments: 1,
    });
    geo.center();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial {...concrete} />
    </mesh>
  );
}

/** Canaleta: bloco em formato "U" para vergas/cintas. */
export function CanaletaModel() {
  const geometry = useMemo(() => {
    const W = 1.6;
    const H = 0.78;
    const t = 0.11;

    const s = new THREE.Shape();
    s.moveTo(-W / 2, -H / 2);
    s.lineTo(W / 2, -H / 2);
    s.lineTo(W / 2, H / 2);
    s.lineTo(W / 2 - t, H / 2);
    s.lineTo(W / 2 - t, -H / 2 + t);
    s.lineTo(-W / 2 + t, -H / 2 + t);
    s.lineTo(-W / 2 + t, H / 2);
    s.lineTo(-W / 2, H / 2);
    s.closePath();

    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 1.4,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.012,
      bevelSegments: 1,
    });
    geo.center();
    geo.rotateY(Math.PI / 2);
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial {...concrete} />
    </mesh>
  );
}

/** Poste / mourão de concreto armado com furos para arame. */
export function PosteModel() {
  const holeYs = [0.55, 0.75, 0.95];
  return (
    <group scale={0.95}>
      {/* corpo do poste (leve afunilamento) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.18, 2.4, 0.12]} />
        <meshStandardMaterial {...concreteDark} />
      </mesh>
      {/* topo chanfrado */}
      <mesh position={[0, 1.24, 0]} castShadow>
        <boxGeometry args={[0.18, 0.08, 0.12]} />
        <meshStandardMaterial {...concrete} />
      </mesh>
      {/* furos para arame (cilindros escuros passantes) */}
      {holeYs.map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.022, 0.022, 0.16, 16]} />
          <meshStandardMaterial color="#061a37" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export function ProductModel({ id }: { id: ProductId }) {
  switch (id) {
    case "laje":
      return <LajeModel />;
    case "bloco-eps":
      return <BlocoEpsModel />;
    case "pingadeira":
      return <PingadeiraModel />;
    case "bloco-concreto":
      return <BlocoConcretoModel />;
    case "canaleta":
      return <CanaletaModel />;
    case "poste":
      return <PosteModel />;
    default:
      return null;
  }
}
