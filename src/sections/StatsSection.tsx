"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderGit2, Code2, GitCommitHorizontal, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { stats } from "@/data";
import { useCounter } from "@/hooks/useCounter";
import SectionHeader from "@/components/ui/SectionHeader";

const statIcons: Record<string, React.ElementType> = {
  FolderGit2,
  Code2,
  GitCommitHorizontal,
  Layers,
};

// ── Stat counter card ─────────────────────────────────────────
function StatCard({ stat, enabled }: { stat: typeof stats[0]; enabled: boolean }) {
  const count = useCounter({ end: stat.value, duration: 2000, enabled });
  const Icon = statIcons[stat.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(124,58,237,0.15)" }}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(255,255,255,0.07)",
        textAlign: "center",
        transition: "border-color 0.3s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px auto",
        }}
      >
        <Icon style={{ width: "20px", height: "20px", color: "#7C3AED" }} />
      </div>
      <div className="gradient-text" style={{ fontSize: "2.25rem", fontWeight: 900, lineHeight: 1, marginBottom: "6px" }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: "13px", color: "rgba(249,250,251,0.5)" }}>{stat.label}</div>
    </motion.div>
  );
}

// ── GitHub contribution graph (real embed) ────────────────────
function ContributionGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <GithubIcon className="w-4 h-4" />
          <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(249,250,251,0.8)" }}>GitHub Contributions</span>
        </div>
        <a
          href="https://github.com/Exploreankit"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "12px", color: "#7C3AED", textDecoration: "none" }}
        >
          View Profile →
        </a>
      </div>

      {/* Real GitHub contribution chart via ghchart.rshah.org */}
      <div style={{ borderRadius: "8px", overflow: "hidden", background: "rgba(0,0,0,0.2)" }}>
        <img
          src="https://ghchart.rshah.org/7C3AED/Exploreankit"
          alt="Ankit Singh GitHub contribution chart"
          style={{ width: "100%", height: "auto", display: "block", filter: "brightness(1.1)" }}
          loading="lazy"
        />
      </div>

      <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
        <span style={{ fontSize: "11px", color: "rgba(249,250,251,0.3)" }}>Less</span>
        {[0.08, 0.25, 0.45, 0.7, 1].map((op, i) => (
          <div
            key={i}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "3px",
              background: `rgba(124,58,237,${op})`,
            }}
          />
        ))}
        <span style={{ fontSize: "11px", color: "rgba(249,250,251,0.3)" }}>More</span>
      </div>
    </motion.div>
  );
}

// ── LeetCode stats card ───────────────────────────────────────
function LeetCodeStats() {
  const problems = [
    { label: "Easy",   solved: 85,  total: 100, color: "#10B981" },
    { label: "Medium", solved: 95,  total: 150, color: "#F59E0B" },
    { label: "Hard",   solved: 25,  total: 50,  color: "#EF4444" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Code2 style={{ width: "16px", height: "16px", color: "rgba(249,250,251,0.6)" }} />
          <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(249,250,251,0.8)" }}>LeetCode Stats</span>
        </div>
        <a
          href="https://leetcode.com/u/ankitsingh7167/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "12px", color: "#7C3AED", textDecoration: "none" }}
        >
          View Profile →
        </a>
      </div>

      {/* Circle + bars */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
        {/* Donut */}
        <div style={{ position: "relative", width: "80px", height: "80px", flexShrink: 0 }}>
          <svg width="80" height="80" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
            <motion.circle
              cx="18" cy="18" r="15.9"
              fill="none"
              stroke="url(#leetGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              whileInView={{ strokeDashoffset: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="leetGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "17px", fontWeight: 700, color: "#F9FAFB", lineHeight: 1 }}>205</span>
            <span style={{ fontSize: "10px", color: "rgba(249,250,251,0.4)", marginTop: "2px" }}>solved</span>
          </div>
        </div>

        {/* Progress bars */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          {problems.map((p) => (
            <div key={p.label}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontSize: "12px", color: p.color, fontWeight: 500 }}>{p.label}</span>
                <span style={{ fontSize: "11px", color: "rgba(249,250,251,0.4)" }}>{p.solved}/{p.total}</span>
              </div>
              <div style={{ height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", borderRadius: "999px", background: p.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(p.solved / p.total) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "12px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {[
          { label: "Acceptance", value: "68%" },
          { label: "Ranking",    value: "Top 15%" },
          { label: "Streak",     value: "30 days" },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#F9FAFB" }}>{value}</div>
            <div style={{ fontSize: "11px", color: "rgba(249,250,251,0.4)", marginTop: "2px" }}>{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" style={{ padding: "96px 0", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: "10%",
          top: "20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.07), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", position: "relative" }} ref={ref}>
        <SectionHeader
          eyebrow="Stats"
          title="By the"
          titleHighlight="numbers"
          description="Quantified impact across projects, problem-solving, and open-source contributions."
          align="center"
        />

        {/* Counter cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} enabled={inView} />
          ))}
        </div>

        {/* GitHub + LeetCode */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "20px",
          }}
        >
          <ContributionGraph />
          <LeetCodeStats />
        </div>
      </div>
    </section>
  );
}
