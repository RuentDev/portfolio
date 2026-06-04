"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function NavigationV2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-charcoal-glass backdrop-blur-md border-b border-white/10 shadow-sm" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
        <Link href="#" className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter">
          RuentDev
        </Link>
        <div className="hidden md:flex items-center gap-gutter">
          <Link href="#about" className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            About
          </Link>
          <Link href="#skills" className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            Contact
          </Link>
          <button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-6 py-2 rounded-full hover:scale-95 active:scale-90 transition-transform">
            Resume
          </button>
        </div>
        <button 
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container absolute top-full left-0 w-full flex flex-col items-center py-6 gap-4 border-b border-white/10 shadow-lg">
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            About
          </Link>
          <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            Skills
          </Link>
          <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            Projects
          </Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors">
            Contact
          </Link>
          <button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-6 py-2 rounded-full hover:scale-95 active:scale-90 transition-transform">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
