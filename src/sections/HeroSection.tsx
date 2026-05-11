"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, XIcon } from "@/components/ui/SocialIcons";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useMousePosition } from "@/hooks/useMousePosition";
import { staggerContainer, fadeInUp, fadeIn } from "@/animations/variants";
import Button from "@/components/ui/Button";

const typingWords = [
  "Software Engineer",
  "Full-Stack Developer",
  "Product Builder",
  "AI Explorer",
  "Systems Thinker",
];

const socialLinks = [
  { icon: GithubIcon,   href: "https://github.com/Exploreankit",                       label: "GitHub"   },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ankit-singh-34939121b/",     label: "LinkedIn" },
  { icon: XIcon,        href: "https://x.com/being_ankit7167",                          label: "X"        },
  { icon: LeetcodeIcon, href: "https://leetcode.com/u/ankitsingh7167/",                 label: "LeetCode" },
];

/**
 * Full-screen hero section with animated gradient, typing effect, and mouse-follow glow
 */
export default function HeroSection() {
  const { displayText } = useTypingEffect({
    words: typingWords,
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseDuration: 2200,
  });
  const mouse = useMousePosition();
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary violet blob */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.18] animate-blob"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #4F1D96 40%, transparent 70%)",
            top: "-15%",
            left: "-12%",
            filter: "blur(90px)",
          }}
        />
        {/* Cyan accent blob */}
        <div
          className="absolute w-[550px] h-[550px] rounded-full opacity-[0.14] animate-blob animation-delay-2000"
          style={{
            background: "radial-gradient(circle, #06B6D4 0%, #0E7490 40%, transparent 70%)",
            bottom: "5%",
            right: "-8%",
            filter: "blur(90px)",
          }}
        />
        {/* Center ambient glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.08] animate-blob animation-delay-4000"
          style={{
            background: "radial-gradient(circle, #A78BFA, transparent 70%)",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(110px)",
          }}
        />
        {/* Extra deep-blue ambient */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.10] animate-blob animation-delay-2000"
          style={{
            background: "radial-gradient(circle, #3B82F6, transparent 70%)",
            top: "20%",
            right: "20%",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Mouse-follow glow */}
      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out hidden lg:block"
        style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
          left: mouse.x - 350,
          top: mouse.y - 350,
          filter: "blur(50px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-7"
        >
          {/* Status badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase glass border border-emerald-500/20 text-emerald-300/90 shadow-[0_0_20px_rgba(16,185,129,0.08)]">
              {/* Pulsing dot with glow */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight text-foreground leading-[0.95]">
              Ankit{" "}
              <span className="gradient-text">Singh</span>
            </h1>
          </motion.div>

          {/* Typing effect — fixed with min-height to prevent layout shift */}
          <motion.div variants={fadeInUp} className="h-12 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/55 tracking-tight">
              <span className="text-foreground/90">{displayText}</span>
              <span className="typing-cursor" />
            </p>
          </motion.div>

          {/* Description — updated branding */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-base sm:text-lg text-foreground/45 leading-relaxed"
          >
            Full-stack engineer building{" "}
            <span className="text-violet-400 font-medium">scalable applications</span>,{" "}
            <span className="text-cyan-400 font-medium">intelligent systems</span>, and{" "}
            <span className="text-violet-300 font-medium">modern digital experiences</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mt-1"
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
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl glass border border-white/[0.08] text-foreground/40 hover:text-cyan-400 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator — animated mouse icon */}
          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            {/* Mouse outline */}
            <div className="w-6 h-10 rounded-full border-2 border-foreground/20 group-hover:border-primary/50 transition-colors duration-300 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 rounded-full bg-foreground/40 group-hover:bg-primary/70 transition-colors duration-300"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-foreground/25 group-hover:text-primary/60 transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
