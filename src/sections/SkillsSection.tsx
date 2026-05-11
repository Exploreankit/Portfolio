"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud, Brain, Wrench } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/animations/variants";
import { skillCategories } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";

const categoryIcons: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Cloud,
  Brain,
  Wrench,
};

const floatingTags = [
  "Node.js", "React", "TypeScript", "NestJS", "MySQL",
  "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS",
  "Python", "Socket.IO", "JWT", "REST APIs", "Next.js",
  "TypeORM", "Prisma", "Firebase", "Razorpay", "OpenAI",
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "96px 0", position: "relative" }}>
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.08), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I"
          titleHighlight="work with"
          description="A curated set of tools and technologies I use to build modern, scalable applications."
          align="center"
        />

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.icon] || Monitor;
            return (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                  overflow: "hidden",
                }}
                whileHover={{
                  borderColor: `${category.color}40`,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Hover glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                    background: `radial-gradient(circle at 50% 0%, ${category.color}08, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: `${category.color}15`,
                      border: `1px solid ${category.color}30`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "18px", height: "18px", color: category.color }} />
                  </div>
                  <h3 style={{ fontWeight: 600, color: "#F9FAFB", fontSize: "15px", margin: 0 }}>
                    {category.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {category.skills.map((skill) => (
                    <div key={skill.name} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {/* Skill name + level */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "14px", lineHeight: 1 }}>{skill.icon}</span>
                          <span style={{ fontSize: "13.5px", color: "rgba(249,250,251,0.8)", fontWeight: 500 }}>
                            {skill.name}
                          </span>
                        </div>
                        <span style={{ fontSize: "11px", color: "rgba(249,250,251,0.35)" }}>
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div
                        style={{
                          height: "3px",
                          background: "rgba(255,255,255,0.06)",
                          borderRadius: "999px",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          style={{
                            height: "100%",
                            borderRadius: "999px",
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}70)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating skill tags */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {floatingTags.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.06, y: -2 }}
              style={{
                padding: "5px 14px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 500,
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(249,250,251,0.55)",
                cursor: "default",
                transition: "color 0.2s ease, border-color 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#F9FAFB";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(249,250,251,0.55)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
