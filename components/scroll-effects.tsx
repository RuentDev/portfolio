"use client";

import type React from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Sphere, Box, Torus } from "@react-three/drei";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type * as THREE from "three";

function FloatingGeometry({ position, color, type = "sphere", scrollY }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest: number) => {
      if (meshRef.current) {
        meshRef.current.rotation.x = latest * 0.01;
        meshRef.current.rotation.y = latest * 0.005;
        meshRef.current.position.y = Math.sin(latest * 0.002) * 2;
      }
    });
    return unsubscribe;
  }, [scrollY]);

  const GeometryComponent =
    type === "box" ? Box : type === "torus" ? Torus : Sphere;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <GeometryComponent
        ref={meshRef}
        position={position}
        args={type === "torus" ? [1, 0.3, 16, 32] : [1, 1, 1]}
      >
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </GeometryComponent>
    </Float>
  );
}

function ParticleField({ scrollY }: any) {
  const particlesRef = useRef<THREE.Points>(null);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest: number) => {
      if (particlesRef.current) {
        particlesRef.current.rotation.y = latest * 0.0005;
        particlesRef.current.position.y = -latest * 0.001;
      }
    });
    return unsubscribe;
  }, [scrollY]);

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#6366f1" transparent opacity={0.6} />
    </points>
  );
}

function Scene({ scrollY }: any) {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <ParticleField scrollY={scrollY} />

      <FloatingGeometry
        position={[-8, 2, -5]}
        color="#6366f1"
        type="sphere"
        scrollY={scrollY}
      />
      <FloatingGeometry
        position={[8, -2, -3]}
        color="#8b5cf6"
        type="box"
        scrollY={scrollY}
      />
      <FloatingGeometry
        position={[-6, -4, -8]}
        color="#06b6d4"
        type="torus"
        scrollY={scrollY}
      />
      <FloatingGeometry
        position={[6, 4, -6]}
        color="#f59e0b"
        type="sphere"
        scrollY={scrollY}
      />
    </>
  );
}

export function ScrollEffects({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  if (!mounted) return <div ref={containerRef}>{children}</div>;

  return (
    <div ref={containerRef} className="scroll-effect-wrapper relative">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Scene scrollY={scrollY} />
        </Canvas>
      </div>

      {/* Parallax Layers */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="absolute top-96 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-64 left-1/2 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-md" />
        <div className="absolute bottom-96 right-1/4 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-lg" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
