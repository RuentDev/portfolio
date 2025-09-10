"use client";

import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 100);

        const sections = [
          "hero",
          "about",
          "skills",
          "projects",
          "testimonials",
          "contact",
        ];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(current || "");
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const navItems = [
    { href: "#hero", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#work-experience", label: "Experience", icon: Briefcase },
    // { href: "#testimonials", label: "Reviews", icon: MessageSquare },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled
          ? "w-auto px-6 py-3 glassmorphic-strong rounded-full"
          : "w-full max-w-7xl p-4 md:py-4 md:px-0"
      )}
    >
      <div
        className={`flex justify-between items-center gap-4 ${
          isScrolled ? "" : "max-w-7xl mx-auto"
        }`}
      >
        <div className="flex-shrink-0">
          <div className="relative group">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-violet-500 to-primary bg-clip-text text-transparent">
              RuentDev
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="hidden md:block">
          <div
            className={`flex items-center ${
              isScrolled ? "space-x-1" : "space-x-8"
            }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center transition-all duration-300 ${
                    isScrolled
                      ? `px-4 py-2 rounded-full text-sm ${
                          isActive
                            ? "bg-primary/20 text-primary shadow-lg"
                            : "hover:bg-white/10 text-foreground/80 hover:text-foreground"
                        }`
                      : `font-medium ${
                          isActive
                            ? "text-primary"
                            : "text-foreground/80 hover:text-primary"
                        }`
                  }`}
                >
                  {isScrolled && <Icon className="w-4 h-4 mr-2" />}
                  <span>{isScrolled ? item.label : item.label}</span>

                  {!isScrolled && (
                    <div
                      className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 transform transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-50"
                      }`}
                    ></div>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative overflow-hidden group hover:bg-white/10 border border-white/20 rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 relative z-10" />
            ) : (
              <Menu className="h-5 w-5 relative z-10" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2">
          <div className="glassmorphic-strong rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl p-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "bg-primary/20 text-primary shadow-lg"
                      : "hover:bg-white/10 text-foreground/80 hover:text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-primary to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
