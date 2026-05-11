"use client";

import { motion } from "framer-motion";
import { Award, Trophy, GitMerge, Cloud, Code2, GraduationCap } from "lucide-react";
import { achievements } from "@/data";
import type { Achievement } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const achievementIcons: Record<string, React.ElementType> = {
  Award,
  Trophy,
  GitMerge,
  Cloud,
  Code2,
  GraduationCap,
};

const typeConfig: Record<
  Achievement["type"],
  { label: string; color: string; bg: string }
> = {
  certification: { label: "Certification", color: "#7C3AED", bg: "rgba(124,58,237,0.12)" },
  hackathon:     { label: "Hackathon",     color: "#F59E0B", bg: "rgba(245,158,11,0.12)" },
  achievement:   { label: "Achievement",   color: "#10B981", bg: "rgba(16,185,129,0.12)" },
  opensource:    { label: "Open Source",   color: "#06B6D4", bg: "rgba(6,182,212,0.12)"  },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{ padding: "96px 0", position: "relative" }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          left: "-10%",
          top: "30%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.07), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <SectionHeader
          eyebrow="Achievements"
          title="Certifications &"
          titleHighlight="milestones"
          description="Recognition, certifications, and milestones from my development journey."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.icon] || Award;
            const config = typeConfig[achievement.type];

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: `0 8px 32px ${config.color}25` }}
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s ease",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Subtle top glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${config.color}50, transparent)`,
                  }}
                />

                {/* Icon + type badge row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: config.bg,
                      border: `1px solid ${config.color}30`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "18px", height: "18px", color: config.color }} />
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "999px",
                      color: config.color,
                      background: config.bg,
                      border: `1px solid ${config.color}30`,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#F9FAFB",
                    margin: "0 0 8px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {achievement.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(249,250,251,0.55)",
                    lineHeight: 1.65,
                    margin: "0 0 16px 0",
                    flex: 1,
                  }}
                >
                  {achievement.description}
                </p>

                {/* Footer: date + link */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <span style={{ fontSize: "11px", color: "rgba(249,250,251,0.3)" }}>
                    {achievement.date}
                  </span>
                  {achievement.link && achievement.link !== "#" && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: config.color,
                        textDecoration: "none",
                        transition: "opacity 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      View →
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
