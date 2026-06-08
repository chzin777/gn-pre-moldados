"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Center,
  Float,
  Html,
  Gltf,
  PerspectiveCamera,
} from "@react-three/drei";
import { ProductModel } from "./Models";
import type { ProductId } from "@/lib/site";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-navy/60">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-navy/20 border-t-navy" />
        <span className="text-xs font-medium">Carregando 3D…</span>
      </div>
    </Html>
  );
}

interface ModelViewerProps {
  productId: ProductId;
  /** Caminho de um .glb em /public para substituir o modelo procedural. */
  modelUrl?: string;
  className?: string;
}

export default function ModelViewer({
  productId,
  modelUrl,
  className,
}: ModelViewerProps) {
  const reduced = useReducedMotion();

  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [3.4, 2.2, 3.8], fov: 38 }}
      >
        <PerspectiveCamera makeDefault position={[3.4, 2.2, 3.8]} fov={38} />

        {/* Iluminação (sem HDR externo — funciona offline) */}
        <ambientLight intensity={0.6} />
        <hemisphereLight args={["#ffffff", "#9aa6b8", 0.5]} />
        <directionalLight
          position={[5, 6, 4]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-4, 3, -3]} intensity={0.5} color="#cdd9ec" />

        <Suspense fallback={<Loader />}>
          <Float
            speed={reduced ? 0 : 1.2}
            rotationIntensity={reduced ? 0 : 0.25}
            floatIntensity={reduced ? 0 : 0.4}
          >
            <Center>
              {modelUrl ? (
                <Gltf src={modelUrl} />
              ) : (
                <ProductModel id={productId} />
              )}
            </Center>
          </Float>

          <ContactShadows
            position={[0, -1.1, 0]}
            opacity={0.35}
            scale={9}
            blur={2.4}
            far={4}
            resolution={512}
            color="#061a37"
          />
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom
          minDistance={3}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.9}
          autoRotate={!reduced}
          autoRotateSpeed={0.9}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
