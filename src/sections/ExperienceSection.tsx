"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Brain, GitBranch } from "lucide-react";
import { experiences } from "@/data";
import type { Experience } from "@/types";
import { staggerContainer, timelineItem } from "@/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const typeConfig: Record<Experience["type"], { icon: React.ElementType; color: string; bg: string }> = {
  work: { icon: Briefcase, color: "#7C3AED", bg: "#7C3AED15" },
  freelance: { icon: GitBranch, color: "#06B6D4", bg: "#06B6D415" },
  project: { icon: Code2, color: "#10B981", bg: "#10B98115" },
  education: { icon: Brain, color: "#F59E0B", bg: "#F59E0B15" },
};

/**
 * Animated vertical timeline for experience
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="My professional"
          titleHighlight="journey"
          description="A timeline of my development experience, projects, and continuous learning."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent opacity-30 hidden sm:block" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => {
              const config = typeConfig[exp.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={exp.id}
                  variants={timelineItem}
                  className="relative flex gap-6 sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 hidden sm:flex border"
                    style={{
                      backgroundColor: config.bg,
                      borderColor: `${config.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: config.color }} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass rounded-2xl p-6 border border-white/06 hover:border-white/12 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-foreground text-lg group-hover:text-violet-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-foreground/50 mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-foreground/40 glass px-3 py-1 rounded-full border border-white/06">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-foreground/55">
                          <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: config.color }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="default">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
