"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/SocialIcons";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useMousePosition } from "@/hooks/useMousePosition";
import { staggerContainer, fadeInUp, fadeIn } from "@/animations/variants";
import Button from "@/components/ui/Button";

const typingWords = [
  "Full Stack Developer",
  "Backend Engineer",
  "AI Enthusiast",
  "Node.js Expert",
  "Problem Solver",
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/ankitsingh", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/ankitsingh", label: "LinkedIn" },
  { icon: LeetcodeIcon, href: "https://leetcode.com/ankitsingh", label: "LeetCode" },
];

/**
 * Full-screen hero section with animated gradient, typing effect, and mouse-follow glow
 */
export default function HeroSection() {
  const { displayText } = useTypingEffect({ words: typingWords });
  const mouse = useMousePosition();
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-blob"
          style={{
            background: "radial-gradient(circle, #7C3AED, transparent 70%)",
            top: "-10%",
            left: "-10%",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 animate-blob animation-delay-2000"
          style={{
            background: "radial-gradient(circle, #06B6D4, transparent 70%)",
            bottom: "10%",
            right: "-5%",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10 animate-blob animation-delay-4000"
          style={{
            background: "radial-gradient(circle, #7C3AED, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Mouse-follow glow */}
      <div
        className="absolute pointer-events-none transition-all duration-300 ease-out hidden lg:block"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          left: mouse.x - 300,
          top: mouse.y - 300,
          filter: "blur(40px)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase glass border border-primary/20 text-violet-300">
              <Sparkles className="w-3 h-3 text-primary" />
              Available for opportunities
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-none">
              Ankit{" "}
              <span className="gradient-text">Singh</span>
            </h1>
          </motion.div>

          {/* Typing effect subtitle */}
          <motion.div variants={fadeInUp} className="h-10 flex items-center">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/60">
              <span className="text-foreground/90">{displayText}</span>
              <span className="typing-cursor" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-base sm:text-lg text-foreground/50 leading-relaxed"
          >
            Specializing in{" "}
            <span className="text-violet-400 font-medium">Node.js</span>,{" "}
            <span className="text-cyan-400 font-medium">NestJS</span>, and{" "}
            <span className="text-violet-400 font-medium">MERN Stack</span>.
            Building scalable backend systems, REST APIs, and AI-integrated
            applications that power modern products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mt-2"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/resume.pdf"
              external
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl glass border border-white/08 text-foreground/50 hover:text-foreground hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeIn}
            className="mt-12 flex flex-col items-center gap-2 text-foreground/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
              animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
