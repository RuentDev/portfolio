"use client";

import {
  OrbitControls,
  Float,
  Environment,
  Text3D,
  Center,
  Text,
} from "@react-three/drei";
import Image from "next/image";
import { Suspense, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTypewriter } from "@/hooks/use-typewriter";
import { socialLinks } from "@/data/contact";

function FloatingCodeSymbols() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Center position={[-2, 1, -3]}>
          <Text3D
            font="/fonts/Geist_Bold.json"
            size={0.3}
            height={0.1}
            curveSegments={12}
          >
            {"</>"}
            <meshStandardMaterial color="#6366f1" />
          </Text3D>
        </Center>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Center position={[3.1, -2, -5]}>
          <Text3D
            font="/fonts/Geist_Bold.json"
            size={0.25}
            height={0.08}
            curveSegments={12}
          >
            {"{}"}
            <meshStandardMaterial color="#8b5cf6" />
          </Text3D>
        </Center>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Center position={[1, 2, -5]}>
          <Text3D
            font="/fonts/Geist_Bold.json"
            size={0.5}
            height={0.06}
            curveSegments={12}
          >
            {"()"}
            <meshStandardMaterial color="#06b6d4" />
          </Text3D>
        </Center>
      </Float>
    </>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });

  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const typewriterText = useTypewriter({
    words: [
      "Fullstack JavaScript Developer",
      "React & Next.js Developer",
      "Node.js Backend Developer",
      "TypeScript Lover",
      "Shopify Developer",
      "Problem Solver",
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <motion.section
      ref={heroRef}
      style={{ y, opacity, scale }}
      className="hero-section h-auto flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      id="hero"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-full lg:w-[600px] xl:w-[700px]">
                  <span className="text-gradient">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground max-w-lg text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Crafting exceptional digital experiences with modern
                technologies. Passionate about clean code, innovative solutions,
                and user-centered design.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="neumorphic hover:shadow-lg transition-all duration-300 bg-card text-card-foreground border-border hover:scale-105"
              >
                Download CV
              </Button> */}
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with 3D Background */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                y: useTransform(scrollY, [0, 500], [0, -100]),
                rotateY: useTransform(scrollY, [0, 500], [0, 15]),
              }}
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <Suspense fallback={null}>
                  <Environment preset="studio" />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <FloatingCodeSymbols />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                  />
                </Suspense>
              </Canvas>
            </motion.div>

            <div className="relative z-10">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full neumorphic p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden glassmorphic">
                  <Image
                    src="/me.jpg"
                    alt="Ruentgen's Profile Picture"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full glassmorphic flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full glassmorphic flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ y: useTransform(scrollY, [0, 300], [0, -30]) }}
              >
                <span className="text-xl">🚀</span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-8 w-10 h-10 rounded-full glassmorphic flex items-center justify-center"
                animate={{
                  y: [0, -8, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                style={{ y: useTransform(scrollY, [0, 300], [0, -40]) }}
              >
                <span className="text-lg">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
