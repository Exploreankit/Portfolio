"use client";

import { motion } from "framer-motion";
import { Award, Trophy, GitMerge, Cloud, Code2, GraduationCap } from "lucide-react";
import { achievements } from "@/data";
import type { Achievement } from "@/types";
import { staggerContainer, fadeInUp } from "@/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";

const achievementIcons: Record<string, React.ElementType> = {
  Award,
  Trophy,
  GitMerge,
  Cloud,
  Code2,
  GraduationCap,
};

const typeConfig: Record<Achievement["type"], { label: string; color: string; bg: string }> = {
  certification: { label: "Certification", color: "#7C3AED", bg: "#7C3AED15" },
  hackathon: { label: "Hackathon", color: "#F59E0B", bg: "#F59E0B15" },
  achievement: { label: "Achievement", color: "#10B981", bg: "#10B98115" },
  opensource: { label: "Open Source", color: "#06B6D4", bg: "#06B6D415" },
};

/**
 * Achievements section with glassmorphism cards
 */
export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #7C3AED, transparent 70%)",
            left: "-10%",
            top: "30%",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Achievements"
          title="Certifications &"
          titleHighlight="milestones"
          description="Recognition, certifications, and milestones from my development journey."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((achievement) => {
            const Icon = achievementIcons[achievement.icon] || Award;
            const config = typeConfig[achievement.type];

            return (
              <motion.div
                key={achievement.id}
                variants={fadeInUp}
                className="group relative glass rounded-2xl p-6 border border-white/06 hover:border-white/14 transition-all duration-300"
                whileHover={{ y: -4, boxShadow: `0 8px 32px ${config.color}20` }}
              >
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: config.bg, border: `1px solid ${config.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: config.color }} />
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full border"
                    style={{
                      color: config.color,
                      backgroundColor: config.bg,
                      borderColor: `${config.color}30`,
                    }}
                  >
                    {config.label}
                  </span>
                </div>

                <h3 className="font-bold text-foreground mb-2 group-hover:text-violet-300 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed mb-4">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/35">{achievement.date}</span>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium transition-colors"
                      style={{ color: config.color }}
                    >
                      View →
                    </a>
                  )}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${config.color}08, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
