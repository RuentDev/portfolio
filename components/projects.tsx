"use client";

import Image from "next/image";
import { Suspense } from "react";
import { cubePositions, projects } from "@/data/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Link } from "lucide-react";
import { Canvas, Vector3 } from "@react-three/fiber";
import { Card, CardContent } from "@/components/ui/card";
import { OrbitControls, Environment, Box } from "@react-three/drei";

function FloatingProjectCubes() {
  return (
    <>
      {cubePositions.map((cube, index) => (
        <Box key={index} position={cube.position as Vector3} scale={cube.scale}>
          <meshStandardMaterial
            color={cube.color}
            transparent
            opacity={0.7}
            roughness={0.3}
            metalness={0.1}
          />
        </Box>
      ))}
    </>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.6} />
            <FloatingProjectCubes />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.2}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A showcase of my recent work, demonstrating expertise in modern web
            technologies and user-centered design principles.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="neumorphic border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <iframe
                  sandbox="allow-same-origin allow-scripts"
                  src={project.liveUrl}
                  className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-500 overflow-hidden"
                  scrolling="no"
                />
                <div className="absolute inset-0 glassmorphic opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    className="glassmorphic hover:scale-110 transition-transform duration-200"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="glassmorphic bg-transparent hover:scale-110 transition-transform duration-200"
                  >
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                    </Link>
                    Code
                  </Button>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="default"
                      className="neumorphic-inset hover:scale-105 transition-transform duration-200 text-black"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="neumorphic border-0 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 glassmorphic opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Button
                    size="sm"
                    className="glassmorphic p-2 hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="glassmorphic p-2 bg-transparent hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs neumorphic-inset hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge
                      variant="secondary"
                      className="text-xs neumorphic-inset hover:scale-105 transition-transform duration-200"
                    >
                      +{project.technologies.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
