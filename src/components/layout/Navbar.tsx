"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "@/data";
import { useScrolled } from "@/hooks/useScrollProgress";
import { scrollToSection } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(3,7,18,0.88)" : "rgba(3,7,18,0.5)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled ? "0 2px 40px rgba(0,0,0,0.5)" : "none",
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          {/*
            3-column grid:
              col 1 (logo)  — fixed width, left-aligned
              col 2 (nav)   — flex:1, items centered
              col 3 (CTA)   — fixed width matching col 1, right-aligned
            This guarantees the nav is always perfectly centered.
          */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr 160px",
              alignItems: "center",
              height: "64px",
            }}
          >
            {/* ── Col 1: Logo ── */}
            <motion.a
              href="#"
              style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                  boxShadow: "0 0 14px rgba(124,58,237,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                A
              </div>
              <span style={{ fontWeight: 700, color: "#F9FAFB", fontSize: "14px", letterSpacing: "-0.01em" }}>
                Ankit<span style={{ color: "#7C3AED" }}>.</span>
              </span>
            </motion.a>

            {/* ── Col 2: Nav — centered ── */}
            <nav
              className="hidden md:flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: "2px",
              }}
            >
              {navItems.map((item) => {
                const isHovered = hoveredItem === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      position: "relative",
                      padding: "6px 12px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: isHovered ? "rgba(249,250,251,1)" : "rgba(249,250,251,0.5)",
                      background: isHovered ? "rgba(255,255,255,0.07)" : "transparent",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "color 0.2s ease, background 0.2s ease",
                      letterSpacing: "0.01em",
                      whiteSpace: "nowrap",
                      lineHeight: 1,
                    }}
                  >
                    {item.label}
                    {/* Gradient underline on hover */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "3px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "1.5px",
                        width: isHovered ? "16px" : "0px",
                        background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                        borderRadius: "999px",
                        transition: "width 0.25s ease",
                        display: "block",
                      }}
                    />
                  </button>
                );
              })}
            </nav>

            {/* ── Col 3: CTA — right-aligned ── */}
            <div
              className="hidden md:flex"
              style={{ justifyContent: "flex-end", alignItems: "center", gap: "8px" }}
            >
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

            {/* ── Mobile toggle (replaces col 3 on small screens) ── */}
            <div className="flex md:hidden" style={{ justifyContent: "flex-end" }}>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  color: "rgba(249,250,251,0.7)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 40,
              background: "rgba(3,7,18,0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    fontSize: "14px",
                    color: "rgba(249,250,251,0.7)",
                    background: "transparent",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#F9FAFB";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(249,250,251,0.7)";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div style={{ display: "flex", gap: "12px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
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
