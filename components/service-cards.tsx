"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const services = [
  {
    category: "STRATEGY",
    title: "Brand Strategy & Art Direction",
    isCentral: false,
    color: "muted",
  },
  {
    category: "DESIGN",
    title: "UX/UI Design & Website/App Design",
    isCentral: true,
    color: "teal",
  },
  {
    category: "MARKETING",
    title: "Marketing & Content Creation",
    isCentral: false,
    color: "muted",
  },
];

const features = [
  "Awesome visual Identities & logo(s)",
  "Brand guidelines & style guides",
  "We Hit The Ground Running",
  "Unlimited Revisions Until You Are Happy",
  "No 90-day Ramp Up Time",
];

export function ServiceCards() {
  return (
    <section className="py-24 px-4 bg-[#0a0f1e] relative overflow-hidden min-h-screen flex items-center">
      {/* Background Light Source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 flex items-center justify-center py-20">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/3 lg:basis-[400px] flex justify-center"
              >
                <ServiceCard service={service} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const { category, title, isCentral } = service;

  return (
    <motion.div
      initial={false}
      animate={{
        scale: isCentral ? 1.05 : 0.9,
        z: isCentral ? 50 : -50,
        opacity: isCentral ? 1 : 0.7,
      }}
      transition={{ duration: 0.5 }}
      className={`relative w-full max-w-[380px] h-[650px] rounded-[40px] overflow-hidden transition-all duration-500 ${
        isCentral 
          ? "glass-teal-gradient glow-cyan-border z-30 shadow-[0_0_40px_rgba(20,184,166,0.3)]" 
          : "bg-[#111827]/80 backdrop-blur-3xl border border-white/5 z-10 opacity-60"
      }`}
    >
      <Card className="bg-transparent border-0 h-full flex flex-col p-8 md:p-10">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Header */}
          <div className="mb-8">
            <span className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 block ${isCentral ? "text-white" : "text-white/50"}`}>
              {category}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold leading-[1.1] text-white">
              {title}
            </h3>
          </div>

          {/* Feature List */}
          <ul className="space-y-4 mb-10">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full neon-checkmark flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#0a0f1e] stroke-[3px]" />
                </div>
                <span className={`text-sm md:text-base font-medium ${isCentral ? "text-white/90" : "text-white/40"}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-auto">
            <Button
              className={`w-full py-7 rounded-2xl text-lg font-bold transition-all duration-300 ${
                isCentral
                  ? "bg-gradient-to-r from-teal-400 to-cyan-400 text-[#0a0f1e] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] active:scale-[0.98]"
                  : "bg-white/5 text-white/20 border border-white/5 cursor-default blur-[1px]"
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Floating UI Mockup (Only for Central Card) */}
          {isCentral && (
            <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none overflow-hidden rounded-b-[40px]">
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 to-transparent z-10" />
              
              {/* Mockup Elements */}
              <div className="relative w-full h-full p-6">
                {/* Dashboard Screen 1 */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 left-6 w-48 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl floating-mockup-shadow z-20"
                >
                  <div className="p-4 space-y-3">
                    <div className="h-2 w-12 bg-white/20 rounded" />
                    <div className="flex items-end gap-1 h-12">
                      {[40, 70, 45, 90, 60, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-cyan-400/40 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Circular Progress (Donut Chart) */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-4 right-8 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center p-4 z-30"
                >
                  <div className="w-full h-full rounded-full border-[6px] border-cyan-400/30 relative">
                    <div className="absolute inset-0 rounded-full border-[6px] border-cyan-400 border-t-transparent -rotate-45" />
                  </div>
                </motion.div>

                {/* Control Buttons Mockup */}
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 right-6 bg-white/5 backdrop-blur-xl rounded-xl p-3 border border-white/10 z-40 space-y-2"
                >
                  <div className="h-4 w-16 bg-cyan-400/20 rounded-md flex items-center px-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2" />
                    <div className="h-1 w-8 bg-cyan-400/40 rounded" />
                  </div>
                  <div className="h-2 w-12 bg-white/10 rounded ml-2" />
                </motion.div>
              </div>
            </div>
          )}

          {/* Floating Cursor (Only for Central Card) */}
          {isCentral && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
                <MousePointer2 className="w-6 h-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] fill-white" />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
