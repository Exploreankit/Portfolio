"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight, Zap } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data";
import type { Project } from "@/types";
import { staggerContainer, fadeInUp, scaleIn } from "@/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

/**
 * Individual project card in the bento grid
 */
function ProjectCard({
  project,
  onOpen,
  featured,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  featured?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative glass rounded-2xl border border-white/06 overflow-hidden cursor-pointer
        hover:border-white/14 transition-all duration-300 project-card
        ${featured ? "lg:col-span-2" : ""}`}
      onClick={() => onOpen(project)}
      whileHover={{ y: -4 }}
    >
      {/* Gradient header */}
      <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-black text-white/5 select-none">
            {project.title.charAt(0)}
          </div>
        </div>
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border
            ${project.status === "live"
              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
              : "bg-amber-500/20 text-amber-300 border-amber-500/30"
            }`}>
            {project.status === "live" ? "● Live" : "⚡ WIP"}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white/80 text-sm flex items-center gap-1">
            View details <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-foreground/55 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="primary">{tech}</Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="default">+{project.tech.length - 4}</Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-accent transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Project detail modal
 */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl glass-strong rounded-2xl border border-white/12 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient */}
        <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-black text-white/5 select-none">
              {project.title.charAt(0)}
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 text-white/70 hover:text-white hover:bg-black/50 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border
              ${project.status === "live"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                : "bg-amber-500/20 text-amber-300 border-amber-500/30"
              }`}>
              {project.status === "live" ? "● Live" : "⚡ WIP"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
            <p className="text-foreground/65 leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="primary">{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3">Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-foreground/65">
                  <Zap className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <Button variant="primary" size="md" href={project.github} external icon={<GithubIcon className="w-4 h-4" />}>
              View Code
            </Button>
            <Button variant="secondary" size="md" href={project.demo} external icon={<ExternalLink className="w-4 h-4" />}>
              Live Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Projects section with bento grid layout and expandable modals
 */
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #7C3AED, transparent 70%)",
            left: "-15%",
            bottom: "0%",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've"
          titleHighlight="built"
          description="A selection of projects that showcase my skills in backend engineering, full-stack development, and AI integration."
        />

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
              featured={i === 0}
            />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/ankitsingh"
            external
            icon={<GithubIcon className="w-4 h-4" />}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
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
