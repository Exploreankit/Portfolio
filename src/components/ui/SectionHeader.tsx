"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable animated section header.
 * Uses inline styles for alignment so it works in Tailwind v4.
 */
export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("mb-16", className)}
      style={{ textAlign: isCenter ? "center" : "left" }}
    >
      {eyebrow && (
        <motion.div variants={fadeInUp} style={{ marginBottom: "16px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "rgba(124,58,237,0.1)",
              color: "#C4B5FD",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#7C3AED",
                display: "inline-block",
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeInUp}
        style={{
          fontSize: "clamp(1.75rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#F9FAFB",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          style={{
            marginTop: "16px",
            fontSize: "1.0625rem",
            color: "rgba(249,250,251,0.6)",
            lineHeight: 1.7,
            maxWidth: isCenter ? "600px" : "none",
            marginLeft: isCenter ? "auto" : undefined,
            marginRight: isCenter ? "auto" : undefined,
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
