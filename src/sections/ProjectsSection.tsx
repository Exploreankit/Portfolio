"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Zap } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data";
import type { Project } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "16px",
        border: hovered ? "1px solid rgba(124,58,237,0.35)" : "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Gradient header */}
      <div
        style={{
          height: "140px",
          background: `linear-gradient(135deg, ${project.gradient.includes("violet") ? "rgba(124,58,237,0.25)" : project.gradient.includes("cyan") ? "rgba(6,182,212,0.25)" : project.gradient.includes("emerald") ? "rgba(16,185,129,0.25)" : "rgba(236,72,153,0.25)"}, rgba(0,0,0,0.1))`,
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Big letter watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "80px",
            fontWeight: 900,
            color: "rgba(255,255,255,0.04)",
            userSelect: "none",
            letterSpacing: "-4px",
          }}
        >
          {project.title.charAt(0)}
        </div>
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Status badge */}
        <div style={{ position: "absolute", top: "12px", right: "12px" }}>
          <span
            style={{
              padding: "3px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 600,
              background: "rgba(16,185,129,0.2)",
              color: "#6EE7B7",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            ● Live
          </span>
        </div>
        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            alignItems: "flex-end",
            padding: "12px 16px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", display: "flex", alignItems: "center", gap: "4px" }}>
            View details →
          </span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: "16px",
            color: hovered ? "#C4B5FD" : "#F9FAFB",
            margin: "0 0 8px 0",
            transition: "color 0.2s ease",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(249,250,251,0.5)",
            lineHeight: 1.65,
            margin: "0 0 16px 0",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              style={{
                padding: "2px 8px",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: 500,
                background: "rgba(124,58,237,0.12)",
                color: "#C4B5FD",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span
              style={{
                padding: "2px 8px",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: 500,
                background: "rgba(255,255,255,0.05)",
                color: "rgba(249,250,251,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "auto" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              color: "rgba(249,250,251,0.45)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F9FAFB")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(249,250,251,0.45)")}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            Code
          </a>
          {project.demo && project.demo !== project.github && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "12px",
                color: "rgba(249,250,251,0.45)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#06B6D4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(249,250,251,0.45)")}
            >
              <ExternalLink style={{ width: "14px", height: "14px" }} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Project Modal ─────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }} />

      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "640px",
          background: "rgba(10,10,20,0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            height: "180px",
            background: `linear-gradient(135deg, ${project.gradient.includes("violet") ? "rgba(124,58,237,0.4)" : project.gradient.includes("cyan") ? "rgba(6,182,212,0.4)" : project.gradient.includes("emerald") ? "rgba(16,185,129,0.4)" : "rgba(236,72,153,0.4)"}, rgba(0,0,0,0.2))`,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "100px", fontWeight: 900, color: "rgba(255,255,255,0.04)", userSelect: "none" }}>
            {project.title.charAt(0)}
          </div>
          <button
            onClick={onClose}
            style={{ position: "absolute", top: "16px", right: "16px", padding: "8px", borderRadius: "10px", background: "rgba(0,0,0,0.4)", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}
          >
            <X style={{ width: "16px", height: "16px" }} />
          </button>
          <div style={{ position: "absolute", bottom: "16px", left: "24px" }}>
            <span style={{ padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, background: "rgba(16,185,129,0.2)", color: "#6EE7B7", border: "1px solid rgba(16,185,129,0.3)" }}>
              ● Live
            </span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#F9FAFB", margin: "0 0 8px 0" }}>{project.title}</h2>
            <p style={{ fontSize: "14px", color: "rgba(249,250,251,0.6)", lineHeight: 1.7, margin: 0 }}>{project.longDescription}</p>
          </div>

          {/* Tech stack */}
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 600, color: "rgba(249,250,251,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 12px 0" }}>Tech Stack</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tech.map((tech) => (
                <span key={tech} style={{ padding: "3px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: 500, background: "rgba(124,58,237,0.12)", color: "#C4B5FD", border: "1px solid rgba(124,58,237,0.2)" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 600, color: "rgba(249,250,251,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 12px 0" }}>Key Features</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "8px" }}>
              {project.features.map((feature) => (
                <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "rgba(249,250,251,0.65)" }}>
                  <Zap style={{ width: "13px", height: "13px", color: "#7C3AED", marginTop: "2px", flexShrink: 0 }} />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: "12px", paddingTop: "4px" }}>
            <Button variant="primary" size="md" href={project.github} external icon={<GithubIcon className="w-4 h-4" />}>
              View Code
            </Button>
            {project.demo && project.demo !== project.github && (
              <Button variant="secondary" size="md" href={project.demo} external icon={<ExternalLink className="w-4 h-4" />}>
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" style={{ padding: "96px 0", position: "relative" }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          left: "-15%",
          bottom: "0",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <SectionHeader
          eyebrow="Projects"
          title="Things I've"
          titleHighlight="built"
          description="A selection of projects that showcase my skills in full-stack development, real-time systems, and AI integration."
          align="center"
        />

        {/* 2×2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/Exploreankit"
            external
            icon={<GithubIcon className="w-4 h-4" />}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
