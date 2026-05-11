"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Brain, GitBranch, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data";
import type { Experience } from "@/types";
import { staggerContainer, fadeInUp } from "@/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";

const typeConfig: Record<
  Experience["type"],
  { icon: React.ElementType; color: string; bg: string; label: string }
> = {
  work:      { icon: Briefcase, color: "#7C3AED", bg: "rgba(124,58,237,0.12)",  label: "Full-time" },
  freelance: { icon: GitBranch, color: "#06B6D4", bg: "rgba(6,182,212,0.12)",   label: "Freelance" },
  project:   { icon: Code2,     color: "#10B981", bg: "rgba(16,185,129,0.12)",  label: "Project" },
  education: { icon: Brain,     color: "#F59E0B", bg: "rgba(245,158,11,0.12)",  label: "Education" },
};

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "96px 0", position: "relative" }}>
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader
          eyebrow="Experience"
          title="Professional"
          titleHighlight="Journey"
          description="Where I've worked, what I've built, and the impact I've made."
          align="center"
        />

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0px" }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "27px",
              top: "24px",
              bottom: "24px",
              width: "1px",
              background: "linear-gradient(to bottom, rgba(124,58,237,0.6), rgba(6,182,212,0.3), transparent)",
            }}
          />

          {experiences.map((exp, index) => {
            const config = typeConfig[exp.type];
            const Icon = config.icon;
            const isFirst = index === 0;

            return (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                style={{
                  display: "flex",
                  gap: "24px",
                  paddingBottom: index < experiences.length - 1 ? "40px" : "0",
                }}
              >
                {/* Timeline icon */}
                <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: config.bg,
                      border: `1px solid ${config.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isFirst ? `0 0 20px ${config.color}30` : "none",
                    }}
                  >
                    <Icon style={{ width: "22px", height: "22px", color: config.color }} />
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: isFirst
                      ? `1px solid ${config.color}35`
                      : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px",
                    padding: "28px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  {/* Glow accent for current job */}
                  {isFirst && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "200px",
                        height: "200px",
                        background: `radial-gradient(circle, ${config.color}12, transparent 70%)`,
                        pointerEvents: "none",
                        filter: "blur(30px)",
                      }}
                    />
                  )}

                  {/* Card header */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      {/* Role */}
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 700,
                          color: "#F9FAFB",
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: 600,
                          color: config.color,
                          margin: "4px 0 0 0",
                        }}
                      >
                        {exp.company}
                      </p>

                      {/* Location + Period row */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "16px",
                          marginTop: "6px",
                        }}
                      >
                        {exp.location && (
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "12px",
                              color: "rgba(249,250,251,0.4)",
                            }}
                          >
                            <MapPin style={{ width: "12px", height: "12px" }} />
                            {exp.location}
                          </span>
                        )}
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "12px",
                            color: "rgba(249,250,251,0.4)",
                          }}
                        >
                          <Calendar style={{ width: "12px", height: "12px" }} />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Type badge */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        background: config.bg,
                        color: config.color,
                        border: `1px solid ${config.color}30`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {isFirst && (
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: config.color,
                            display: "inline-block",
                            animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                          }}
                        />
                      )}
                      {isFirst ? "Current" : config.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(249,250,251,0.55)",
                      lineHeight: 1.7,
                      margin: "0 0 16px 0",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "0.875rem",
                          color: "rgba(249,250,251,0.65)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: config.color,
                            flexShrink: 0,
                            marginTop: "8px",
                          }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "3px 10px",
                          borderRadius: "6px",
                          fontSize: "11.5px",
                          fontWeight: 500,
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(249,250,251,0.6)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
