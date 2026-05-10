"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderGit2, Code2, GitCommitHorizontal, Layers, TrendingUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { stats } from "@/data";
import { useCounter } from "@/hooks/useCounter";
import { staggerContainer, fadeInUp, scaleIn } from "@/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";

const statIcons: Record<string, React.ElementType> = {
  FolderGit2,
  Code2,
  GitCommit: GitCommitHorizontal,
  Layers,
};

/**
 * Individual animated stat counter card
 */
function StatCard({ stat, enabled }: { stat: typeof stats[0]; enabled: boolean }) {
  const count = useCounter({ end: stat.value, duration: 2000, enabled });
  const Icon = statIcons[stat.icon] || Code2;

  return (
    <motion.div
      variants={scaleIn}
      className="group glass rounded-2xl p-6 border border-white/06 hover:border-primary/20 transition-all duration-300 text-center"
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(124,58,237,0.15)" }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="text-4xl font-black gradient-text mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-foreground/50">{stat.label}</div>
    </motion.div>
  );
}

/**
 * GitHub contribution graph simulation
 */
function ContributionGraph() {
  const weeks = 26;
  const days = 7;

  // Generate pseudo-random contribution data
  const data = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const seed = (w * 7 + d) * 13 + 7;
      const val = (seed * 1103515245 + 12345) & 0x7fffffff;
      return val % 5; // 0-4 intensity
    })
  );

  const intensityColors = [
    "bg-white/05",
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/70",
    "bg-primary",
  ];

  return (
    <div className="glass rounded-2xl p-6 border border-white/06">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <GithubIcon className="w-4 h-4 text-foreground/60" />
          <span className="text-sm font-medium text-foreground/80">GitHub Contributions</span>
        </div>
        <span className="text-xs text-foreground/40">Last 6 months</span>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-2">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((intensity, di) => (
              <motion.div
                key={di}
                className={`w-3 h-3 rounded-sm ${intensityColors[intensity]}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wi * 7 + di) * 0.002, duration: 0.2 }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3">
        <span className="text-xs text-foreground/30">Less</span>
        {intensityColors.map((color, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
        ))}
        <span className="text-xs text-foreground/30">More</span>
      </div>
    </div>
  );
}

/**
 * LeetCode stats card
 */
function LeetCodeStats() {
  const problems = [
    { label: "Easy", solved: 85, total: 100, color: "#10B981" },
    { label: "Medium", solved: 95, total: 150, color: "#F59E0B" },
    { label: "Hard", solved: 25, total: 50, color: "#EF4444" },
  ];

  return (
    <div className="glass rounded-2xl p-6 border border-white/06">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-foreground/60" />
          <span className="text-sm font-medium text-foreground/80">LeetCode Stats</span>
        </div>
        <a
          href="https://leetcode.com/ankitsingh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:text-violet-300 transition-colors"
        >
          View Profile →
        </a>
      </div>

      <div className="flex items-center gap-6 mb-5">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
            <motion.circle
              cx="18" cy="18" r="15.9"
              fill="none"
              stroke="url(#leetGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              whileInView={{ strokeDashoffset: 100 - 68 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="leetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-foreground">205</span>
            <span className="text-xs text-foreground/40">solved</span>
          </div>
        </div>

        <div className="flex-1 space-y-2.5">
          {problems.map((p) => (
            <div key={p.label}>
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color: p.color }}>{p.label}</span>
                <span className="text-foreground/40">{p.solved}/{p.total}</span>
              </div>
              <div className="h-1.5 bg-white/05 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: p.color }}
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

      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/05">
        {[
          { label: "Acceptance", value: "68%" },
          { label: "Ranking", value: "Top 15%" },
          { label: "Streak", value: "30 days" },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="text-sm font-bold text-foreground">{value}</div>
            <div className="text-xs text-foreground/40">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Stats section with animated counters, GitHub graph, and LeetCode stats
 */
export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #06B6D4, transparent 70%)",
            right: "10%",
            top: "20%",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <SectionHeader
          eyebrow="Stats"
          title="By the"
          titleHighlight="numbers"
          description="Quantified impact across projects, problem-solving, and open-source contributions."
        />

        {/* Counter cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} enabled={inView} />
          ))}
        </motion.div>

        {/* GitHub + LeetCode */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <ContributionGraph />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <LeetCodeStats />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
