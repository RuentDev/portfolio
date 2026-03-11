"use client";

import Image from "next/image";
import { Suspense } from "react";
import { cubePositions, projects } from "@/data/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Link as LinkIcon } from "lucide-react";
import { Canvas, Vector3 } from "@react-three/fiber";
import { Card, CardContent } from "@/components/ui/card";
import { OrbitControls, Environment, Box } from "@react-three/drei";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const topProjects = featuredProjects.slice(0, 3);
  const remainingFeatured = featuredProjects.slice(3);
  const allOtherProjects = [...remainingFeatured, ...otherProjects];

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
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A showcase of my recent work, demonstrating expertise in modern web
            technologies and user-centered design principles.
          </p>
        </div>

        {/* Focal Projects Scrollable Area */}
        <Carousel
          className="w-full"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="p-5">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-1/2 p-2 lg:basis-1/3">
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0.8, rotate: 0 }}
                  whileInView={{
                    scale: 1.1,
                    opacity: 1,
                    zIndex: 30,
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ margin: "-20%" }}
                  className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[450px] snap-center relative first:ml-0 last:mr-0 px-4 lg:px-0"
                >
                  <div className="p-10">
                    <Card
                      className={`p-0 border-0 overflow-hidden shadow-xl transition-all duration-500 group flex flex-col h-full rounded-3xl ${
                        index % 2 === 0
                          ? "card-gradient-primary"
                          : "card-gradient-secondary"
                      }`}
                    >
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                          <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-2 block">
                            PROJECT {index + 1}
                          </span>
                          <h3 className="text-3xl font-bold mb-4 leading-tight text-white text-shadow-premium">
                            {project.title}
                          </h3>
                          <div className="space-y-3">
                            {project.technologies.slice(0, 5).map((tech) => (
                              <div
                                key={tech}
                                className="flex items-center text-sm font-medium text-white/90"
                              >
                                <div className="mr-3 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                </div>
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto pt-6 text-center">
                          <Button
                            size="lg"
                            className="w-full glassmorphic-strong bg-white/10 hover:bg-white/20 border-white/20 text-white font-bold rounded-2xl transition-all duration-300"
                            onClick={() =>
                              window.open(project.liveUrl, "_blank")
                            }
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>

                      <div className="relative h-64 overflow-hidden mt-auto">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 450px"
                        />
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="relative overflow-hidden">
          {/* Scroll Indicators */}
          {/* <div className="flex justify-center space-x-2 mt-4 lg:hidden">
            {topProjects.map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/20" />
            ))}
          </div> */}
        </div>

        {/* <div>
          <h2 className="text-4xl text-center sm:text-5xl font-bold text-gradient mb-6">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed text-center">
            A showcase of my personal projects, demonstrating expertise in
            modern web technologies and user-centered design principles.
          </p>
        </div> */}

        {/* Other Projects Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allOtherProjects.map((project, index) => (
            <Card
              key={index}
              className="p-0 border-0 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-[1.05] flex flex-col h-full rounded-2xl glass-surface"
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-foreground/5 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 h-9"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    Preview
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-xl border-foreground/10 hover:border-primary/50 h-9 px-3"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>

              <div className="relative h-40 mt-2 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
}
