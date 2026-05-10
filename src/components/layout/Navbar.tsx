"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "@/data";
import { useScrolled } from "@/hooks/useScrollProgress";
import { scrollToSection } from "@/lib/utils";
import Button from "@/components/ui/Button";

/**
 * Sticky glassmorphism navbar with mobile menu
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(50);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-glow-sm">
                A
              </div>
              <span className="font-bold text-foreground text-sm hidden sm:block">
                Ankit<span className="text-primary">.</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm text-foreground/60 hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                href="/resume.pdf"
                external
                icon={<Download className="w-3.5 h-3.5" />}
              >
                Resume
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick("#contact")}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-strong border-b border-white/08 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-xl transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/08">
                <Button variant="outline" size="sm" href="/resume.pdf" external className="flex-1 justify-center">
                  Download Resume
                </Button>
                <Button variant="primary" size="sm" onClick={() => handleNavClick("#contact")} className="flex-1 justify-center">
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
