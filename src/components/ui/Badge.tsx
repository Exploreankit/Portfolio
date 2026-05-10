import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success" | "warning";
  className?: string;
}

const variantStyles = {
  default: "bg-white/5 text-foreground/70 border-white/10",
  primary: "bg-primary/10 text-violet-300 border-primary/20",
  accent: "bg-accent/10 text-cyan-300 border-accent/20",
  success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

/**
 * Small badge/tag component for tech stacks and labels
 */
export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
