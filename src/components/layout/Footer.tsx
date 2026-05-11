"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, XIcon } from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: GithubIcon,   href: "https://github.com/Exploreankit",                        label: "GitHub"    },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ankit-singh-34939121b/",      label: "LinkedIn"  },
  { icon: XIcon,        href: "https://x.com/being_ankit7167",                           label: "X"         },
  { icon: LeetcodeIcon, href: "https://leetcode.com/u/ankitsingh7167/",                  label: "LeetCode"  },
  { icon: Mail,         href: "mailto:ankitsingh7167@gmail.com",                        label: "Email"     },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "40px 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: "12px",
              }}
            >
              A
            </div>
            <span style={{ fontWeight: 700, color: "rgba(249,250,251,0.8)", fontSize: "14px" }}>
              Ankit Singh
            </span>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  color: "rgba(249,250,251,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.2s ease, background 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F9FAFB";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(249,250,251,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontSize: "12px", color: "rgba(249,250,251,0.3)", display: "flex", alignItems: "center", gap: "4px", margin: 0 }}>
            Built with{" "}
            <Heart style={{ width: "12px", height: "12px", color: "#7C3AED", fill: "#7C3AED" }} />{" "}
            by Ankit Singh © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
