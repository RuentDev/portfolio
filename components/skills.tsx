"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, Text3D, Center } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { skillCategories, technologies } from "@/data/skills";

function FloatingTechIcons() {
  const techPositions = [
    { name: "React", position: [-3, 2, 0], color: "#61dafb", size: 0.15 },
    { name: "Next.js", position: [3, 1, -1], color: "#000000", size: 0.12 },
    { name: "TS", position: [-2, -1, 1], color: "#3178c6", size: 0.13 },
    { name: "Node", position: [2, -2, 0], color: "#339933", size: 0.14 },
    { name: "Python", position: [0, 3, -2], color: "#3776ab", size: 0.12 },
    { name: "SQL", position: [-1, -3, -1], color: "#336791", size: 0.11 },
  ];

  function AnimatedTechIcon({ tech, index }: { tech: any; index: number }) {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
      if (meshRef.current) {
        // Create a continuous top-to-bottom loop animation
        const time = state.clock.elapsedTime + index * 0.5;
        const yOffset = Math.sin(time * 0.5) * 4; // Oscillate between -4 and +4
        meshRef.current.position.y = tech.position[1] + yOffset;
      }
    });

    return (
      <group
        ref={meshRef}
        position={[tech.position[0], tech.position[1], tech.position[2]]}
      >
        <Float
          speed={1 + index * 0.2}
          rotationIntensity={0.3 + index * 0.1}
          floatIntensity={0.2} // Reduced float intensity since we have custom Y animation
        >
          <Center>
            <Text3D
              font="/fonts/Geist_Bold.json"
              size={tech.size}
              height={0.05}
              curveSegments={12}
            >
              {tech.name}
              <meshStandardMaterial color={tech.color} />
            </Text3D>
          </Center>
        </Float>
      </group>
    );
  }

  return (
    <>
      {techPositions.map((tech, index) => (
        <AnimatedTechIcon key={tech.name} tech={tech} index={index} />
      ))}
    </>
  );
}

function Skill3DText({
  name,
  color,
  index,
  onMouseEnter,
  onMouseLeave,
}: {
  name: string;
  color: string;
  index: number;
  onMouseEnter: (direction: "top" | "bottom") => void;
  onMouseLeave: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && groupRef.current) {
      // Continuous falling animation with gravity-like acceleration
      const time = state.clock.elapsedTime;
      const fallSpeed = 0.1; // Speed of falling (slower for more dramatic effect)
      const fallHeight = 6; // Height range for falling
      const delay = index * 1.3; // Staggered start time for each text

      // Calculate falling position with continuous loop
      const fallTime = (time + delay) * fallSpeed;
      const normalizedTime = fallTime % 1; // Keep between 0 and 1

      // Apply gravity-like acceleration (quadratic curve)
      const gravityTime = normalizedTime * normalizedTime;

      // Map normalized time to falling position (top to bottom)
      const yPosition = fallHeight * (1 - gravityTime) - fallHeight / 2;

      // Apply falling animation to the group
      groupRef.current.position.y = yPosition;

      // Add dynamic rotation during fall (more rotation as it falls faster)
      const rotationIntensity = gravityTime * 0.3;
      groupRef.current.rotation.z = Math.sin(fallTime * 3) * rotationIntensity;

      // Add slight wobble effect
      groupRef.current.rotation.x = Math.sin(fallTime * 4) * 0.05;

      // Scale effect - slightly smaller when falling faster
      const scale = 1 - gravityTime * 0.1;
      groupRef.current.scale.setScalar(scale);

      // Simple pitch rotation on hover
      const targetRotationX = isHovered ? Math.PI * 0.1 : 0; // 18 degrees pitch up
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        delta * 3 // Smooth transition
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D
          ref={meshRef}
          font="/fonts/Geist_Bold.json"
          size={0.2}
          height={0.08}
          curveSegments={12}
          onPointerEnter={() => {
            setIsHovered(true);
            onMouseEnter("top");
          }}
          onPointerLeave={() => {
            setIsHovered(false);
            onMouseLeave();
          }}
        >
          {name}
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </Text3D>
      </Center>
    </group>
  );
}

function Skills3DCard({
  title,
  skills,
}: {
  title: string;
  skills: Array<{ name: string; color: string }>;
}) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Card className="neumorphic border-0 hover:shadow-xl transition-all duration-300 group h-96">
      <CardContent className="p-6 h-full">
        <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
          {title}
        </h3>
        <div className="h-64 w-full">
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <Suspense fallback={null}>
              <Environment preset="studio" />
              <ambientLight intensity={0.8} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, -5, 5]} intensity={0.5} />
              {skills.map((skill, index) => (
                <Skill3DText
                  key={index}
                  name={skill.name}
                  color={skill.color}
                  index={index}
                  onMouseEnter={(direction) =>
                    setHoveredSkill(`${skill.name}-${direction}`)
                  }
                  onMouseLeave={() => setHoveredSkill(null)}
                />
              ))}
            </Suspense>
          </Canvas>
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to build exceptional digital experiences.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 h-64 w-full">
            {/* <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <Suspense fallback={null}>
                <Environment preset="studio" />
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <FloatingTechIcons />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.3}
                />
              </Suspense>
            </Canvas> */}
          </div>

          {/* Technology Badges with enhanced z-index */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 pt-16">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                onClick={() => {
                  window.open(tech.url, "_blank", "noopener,noreferrer");
                }}
              >
                {tech.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Skills3DCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
