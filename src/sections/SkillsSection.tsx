"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud, Brain, Wrench } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/animations/variants";
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

/**
 * Skills section with categorized animated skill cards and progress bars
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #06B6D4, transparent 70%)",
            right: "-10%",
            top: "20%",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I"
          titleHighlight="work with"
          description="A curated set of tools and technologies I use to build modern, scalable applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.icon] || Monitor;
            return (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                className="group relative glass rounded-2xl p-6 border border-white/06 hover:border-white/12 transition-all duration-300 skill-card"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${category.color}15`,
                      border: `1px solid ${category.color}30`,
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: category.color }} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-base leading-none">{skill.icon}</span>
                          <span className="text-sm text-foreground/80 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-foreground/40">{skill.level}%</span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1 bg-white/05 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
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

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${category.color}10, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating skill badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "Node.js", "React", "TypeScript", "NestJS", "MongoDB",
            "PostgreSQL", "Redis", "Docker", "AWS", "Python",
            "TensorFlow", "Socket.IO", "JWT", "REST APIs", "Next.js",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              variants={scaleIn}
              custom={i}
              className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/08 text-foreground/60 hover:text-foreground hover:border-primary/30 transition-all duration-200 cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
