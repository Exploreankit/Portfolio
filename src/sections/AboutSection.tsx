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
    description: "Designing scalable, secure, and high-performance backend systems with Node.js, NestJS, and microservices.",
    color: "#7C3AED",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web application development using the MERN stack with modern UI/UX principles.",
    color: "#06B6D4",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Building AI-powered applications with TensorFlow, OpenCV, and integrating LLM APIs into production systems.",
    color: "#EC4899",
  },
  {
    icon: Zap,
    title: "REST API Design",
    description: "Crafting clean, documented, and versioned REST APIs with proper authentication and rate limiting.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Auth & Security",
    description: "Implementing JWT, OAuth2, RBAC, and security best practices to protect applications and user data.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on AWS with Docker, CI/CD pipelines, and infrastructure as code.",
    color: "#8B5CF6",
  },
];

/**
 * About section with animated highlight cards
 */
export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Passionate about building"
          titleHighlight="scalable systems"
          description="I'm a Full Stack Developer specializing in backend engineering and AI-integrated applications. I love turning complex problems into elegant, performant solutions."
        />

        {/* Main about content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.p variants={fadeInLeft} className="text-foreground/70 text-lg leading-relaxed">
              Hi, I&apos;m <span className="text-foreground font-semibold">Ankit Singh</span> — a Full Stack Developer
              with a deep focus on backend engineering. I specialize in building{" "}
              <span className="text-violet-400 font-medium">scalable Node.js applications</span>,
              designing robust REST APIs, and architecting systems that handle real-world traffic.
            </motion.p>

            <motion.p variants={fadeInLeft} className="text-foreground/60 leading-relaxed">
              My stack revolves around <span className="text-cyan-400 font-medium">Node.js, NestJS, and the MERN stack</span>,
              with strong expertise in authentication systems, real-time communication with Socket.IO,
              and database optimization across MongoDB, PostgreSQL, and Redis.
            </motion.p>

            <motion.p variants={fadeInLeft} className="text-foreground/60 leading-relaxed">
              Beyond web development, I&apos;m passionate about{" "}
              <span className="text-pink-400 font-medium">AI/ML integration</span> — I&apos;ve built
              emotion detection systems using TensorFlow and OpenCV, and I actively explore ways to
              bring intelligent features into modern web applications.
            </motion.p>

            {/* Quick stats */}
            <motion.div variants={fadeInLeft} className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "3+", label: "Years Coding" },
                { value: "20+", label: "Projects Built" },
                { value: "200+", label: "LeetCode Solved" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 glass rounded-xl border border-white/06">
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs text-foreground/50 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative glass rounded-2xl p-8 border border-white/08">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #7C3AED, transparent)", filter: "blur(40px)" }} />

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ankit Singh</div>
                    <div className="text-xs text-foreground/50">Full Stack Developer</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400">Open to work</span>
                  </div>
                </div>

                {[
                  { label: "Specialization", value: "Backend & Full Stack" },
                  { label: "Primary Stack", value: "Node.js · NestJS · React" },
                  { label: "Database", value: "MongoDB · PostgreSQL · Redis" },
                  { label: "Cloud", value: "AWS · Docker · Vercel" },
                  { label: "AI/ML", value: "TensorFlow · Python · OpenCV" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-white/05 last:border-0">
                    <span className="text-sm text-foreground/50">{label}</span>
                    <span className="text-sm text-foreground/90 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <GlowCard
                className="p-6 h-full"
                glowColor={`${item.color}20`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
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
