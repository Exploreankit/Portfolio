"use client";

import { motion } from "framer-motion";
import { Code2, Server, Brain, Zap, Users, Globe } from "lucide-react";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Designing scalable, secure, and high-performance backend systems with Node.js, NestJS, and microservices.",
    color: "#7C3AED",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using modern stacks with clean UI/UX principles.",
    color: "#06B6D4",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Building AI-powered applications with TensorFlow, OpenCV, and integrating LLM APIs into production systems.",
    color: "#EC4899",
  },
  {
    icon: Zap,
    title: "REST API Design",
    description:
      "Crafting clean, documented, and versioned REST APIs with proper authentication and rate limiting.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Auth & Security",
    description:
      "Implementing JWT, OAuth2, RBAC, and security best practices to protect applications and user data.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on AWS with Docker, CI/CD pipelines, and infrastructure as code.",
    color: "#8B5CF6",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Section header — centered ── */}
        <SectionHeader
          eyebrow="About Me"
          title="Passionate about building"
          titleHighlight="scalable systems"
          description="I'm a Software Engineer specializing in full-stack development and AI-integrated applications. I love turning complex problems into elegant, performant solutions."
          align="center"
        />

        {/* ── Two-column bio + card ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "64px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >

          {/* Left: Bio text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            <motion.p variants={fadeInLeft} className="text-foreground/70 text-base leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="text-foreground font-semibold">Ankit Singh</span> — a Software
              Engineer with a deep focus on building scalable systems and modern digital products.
              I specialize in{" "}
              <span className="text-violet-400 font-medium">full-stack development</span>,
              designing robust APIs, and architecting systems that handle real-world traffic.
            </motion.p>

            <motion.p variants={fadeInLeft} className="text-foreground/60 text-base leading-relaxed">
              My stack spans frontend to infrastructure —{" "}
              <span className="text-cyan-400 font-medium">React, Next.js, Node.js, NestJS</span>,
              with strong expertise in authentication systems, real-time communication, and
              database optimization across MongoDB, PostgreSQL, and Redis.
            </motion.p>

            <motion.p variants={fadeInLeft} className="text-foreground/60 text-base leading-relaxed">
              Beyond web development, I&apos;m passionate about{" "}
              <span className="text-pink-400 font-medium">AI/ML integration</span> — I&apos;ve
              built emotion detection systems using TensorFlow and OpenCV, and I actively explore
              ways to bring intelligent features into modern products.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              variants={fadeInLeft}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", paddingTop: "8px" }}
            >
              {[
                { value: "3+", label: "Years Coding" },
                { value: "20+", label: "Projects Built" },
                { value: "200+", label: "LeetCode Solved" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    textAlign: "center",
                    padding: "16px",
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="gradient-text" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{value}</div>
                  <div style={{ fontSize: "11px", color: "rgba(249,250,251,0.5)", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div
              className="relative glass rounded-2xl p-8"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Decorative glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #7C3AED, transparent)",
                  filter: "blur(40px)",
                }}
              />

              <div className="space-y-1">
                {/* Profile header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                    AS
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground text-sm">Ankit Singh</div>
                    <div className="text-xs text-foreground/50">Software Engineer</div>
                  </div>
                  <div
                    className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400">Open to work</span>
                  </div>
                </div>

                {/* Info rows */}
                {[
                  { label: "Specialization", value: "Backend & Full Stack" },
                  { label: "Primary Stack", value: "Node.js · NestJS · React" },
                  { label: "Database", value: "MongoDB · PostgreSQL · Redis" },
                  { label: "Cloud", value: "AWS · Docker · Vercel" },
                  { label: "AI/ML", value: "TensorFlow · Python · OpenCV" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-sm text-foreground/50">{label}</span>
                    <span className="text-sm text-foreground/90 font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Highlight cards grid ── */}
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
          {highlights.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <GlowCard className="p-6 h-full" glowColor={`${item.color}20`}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{item.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
