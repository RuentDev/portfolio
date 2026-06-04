"use client";

import { useEffect } from "react";

export function ScrollEffectsV2({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // General scroll reveals
    const revealCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".scroll-reveal, .stagger-item").forEach((el, index) => {
      if (el.classList.contains("stagger-item")) {
        (el as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      }
      observer.observe(el);
    });

    // Special Skills Stagger Observer
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            reveals.forEach((el) => {
              el.classList.add("active");
            });
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsObserver.observe(skillsSection);
    }

    // Premium Scroll Handler for Cinematic Effects
    let ticking = false;

    function updateCinematicEffects() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const sections = document.querySelectorAll(".cinematic-section");
      const meshGradient = document.getElementById("scroll-mesh");

      if (meshGradient) {
        meshGradient.style.transform = `translateY(${scrollY * 0.05}px)`;
        meshGradient.style.opacity = (0.3 + scrollY / 5000).toString();
      }

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const rect = el.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const screenMiddle = vh / 2;
        const distance = sectionMiddle - screenMiddle;
        const absDistance = Math.abs(distance);

        const progress = Math.min(absDistance / (vh * 1.5), 1);

        if (el.id === "hero") {
          const scale = 1 - (scrollY / vh) * 0.15;
          const opacity = 1 - scrollY / (vh * 0.8);
          el.style.transform = `scale(${Math.max(scale, 0.85)}) translateY(${scrollY * 0.2}px)`;
          el.style.opacity = Math.max(opacity, 0).toString();
        } else if (absDistance < vh * 2) {
          if (distance > 0) {
            const scale = 0.9 + (1 - progress) * 0.1;
            const opacity = Math.max(0, 1 - progress * 1.5);
            el.style.transform = `scale(${scale})`;
            el.style.opacity = opacity.toString();
          } else {
            const scale = 1 - (absDistance / vh) * 0.05;
            const opacity = Math.max(0, 1 - absDistance / vh);
            el.style.transform = `scale(${scale})`;
            el.style.opacity = opacity.toString();
          }
        }
      });

      const bgParallax = document.querySelector(".video-canvas-container div[data-alt]") as HTMLElement;
      if (bgParallax) {
        bgParallax.style.transform = `scale(${1.1 + scrollY * 0.0001}) translateY(${scrollY * 0.1}px)`;
      }

      ticking = false;
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCinematicEffects);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateCinematicEffects();
    window.addEventListener("resize", updateCinematicEffects);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCinematicEffects);
      observer.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="video-canvas-container">
        <div className="absolute inset-0 bg-deep-black/60 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center opacity-40 scale-110" 
          data-alt="A cinematic, high-definition background" 
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuApna6zg4Sj-pZjJ8u3EP35pl5qCdX_fVqcgh7TgEeIDfDRzbP3nJ9OBuwVClLb1k1H0rpFhFog3wV7cn3hh4I2JzuWNUPtlhG_l0oIUOfiBP-NkXEOkVa282WHGGHjZYNm-e5Rv9-iiG6sV2vdhXI8wxb5T9Y1q_psEXU6DjAwrZZDvq1EMFTN5_JlYGanozZ0nhjd6bhjZxgiRXR606WQbm9DFZgLCafVbPSg3xOgBWQ2jFMBs2pWXkq3Ca8n-gzihD-tCnH4cJ5S")` }}
        ></div>
      </div>
      <div className="cinematic-vignette"></div>
      <div className="grain-overlay"></div>
      <div className="mesh-gradient" id="scroll-mesh"></div>
      {children}
    </>
  );
}
