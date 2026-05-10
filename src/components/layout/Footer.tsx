import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/ankitsingh", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/ankitsingh", label: "LinkedIn" },
  { icon: LeetcodeIcon, href: "https://leetcode.com/ankitsingh", label: "LeetCode" },
  { icon: Mail, href: "mailto:ankit@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/06 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
              A
            </div>
            <span className="font-bold text-foreground/80 text-sm">
              Ankit Singh
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-foreground/40 hover:text-foreground hover:bg-white/5 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-foreground/30 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary fill-primary" /> by Ankit Singh © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
