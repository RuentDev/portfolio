"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink, Building2 } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import { experiences } from "@/data/work-experience";

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<any>();

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function WorkExperience() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="work-experience"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Environment preset="city" />
          <FloatingCube position={[-3, 2, -2]} />
          <FloatingCube position={[3, -1, -3]} />
          <FloatingCube position={[0, 3, -4]} />
          <FloatingCube position={[-2, -2, -1]} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            My professional journey building innovative solutions and leading
            development teams
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20 transform md:-translate-x-px"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences
              .sort((a, b) => b.id - a.id)
              .map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 shadow-lg">
                    <div className="absolute inset-1 bg-primary/30 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <Card
                    className={`neumorphic hover:shadow-2xl transition-all duration-500 group w-full md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } ml-12 md:ml-0`}
                  >
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Building2 className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {experience.title}
                            </h3>
                          </div>
                          <p className="text-lg font-semibold text-primary mb-1">
                            {experience.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {experience.type}
                            </Badge>
                          </div>
                        </div>

                        <motion.a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit
                        </motion.a>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glassmorphic p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how my experience can help bring your next project
              to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
