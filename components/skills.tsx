"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Canvas, Vector3 } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  Text3D,
  Center,
} from "@react-three/drei";
import { Suspense } from "react";
import { skillCategories, technologies, techPositions } from "@/data/skills";

function FloatingTechIcons() {
  return (
    <>
      {techPositions.map((tech, index) => (
        <Float
          key={tech.name}
          speed={1 + index * 0.2}
          rotationIntensity={0.3 + index * 0.1}
          floatIntensity={0.4 + index * 0.1}
        >
          <Center position={tech.position as Vector3}>
            <Text3D
              font="/fonts/Geist_Bold.json"
              size={tech.size}
              height={0.05}
              curveSegments={12}
              rotation={[0, Math.PI, 0]}
            >
              {tech.name}
              <meshStandardMaterial color={tech.color} />
            </Text3D>
          </Center>
        </Float>
      ))}
    </>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 h-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to build exceptional digital experiences.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 h-[50vh] w-full -top-[200px]">
            <Canvas camera={{ position: [0, 0, -5], fov: 70 }}>
              <Suspense fallback={null}>
                <Environment preset="studio" />
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <FloatingTechIcons />
                <OrbitControls
                  enableZoom={false}
                  enablePan={true}
                  // autoRotate
                  autoRotateSpeed={0.5}
                />
              </Suspense>
            </Canvas>
          </div>

          {/* Technology Badges with enhanced z-index */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 pt-16 select-none">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="neumorphic-inset px-4 py-2 text-sm text-black font-medium hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="neumorphic border-0 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-center items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        {/* <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span> */}
                      </div>
                      {/* <div className="w-full bg-muted rounded-full h-2 neumorphic-inset group-hover:h-3 transition-all duration-300">
                        <div
                          className="h-2 group-hover:h-3 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div> */}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
