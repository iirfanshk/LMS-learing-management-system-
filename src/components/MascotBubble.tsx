import { ReactNode } from "react";

interface MascotBubbleProps {
  mascot: "rat" | "cat";
  message: string;
  animation?: "walk-left" | "walk-right" | "bounce" | "float";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
}

const mascotEmoji = { rat: "🐭", cat: "🐱" };

const sizeClasses = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
};

const animationClasses = {
  "walk-left": "animate-walk-in-left",
  "walk-right": "animate-walk-in-right",
  bounce: "animate-bounce-gentle",
  float: "animate-float",
};

export function MascotBubble({ mascot, message, animation = "bounce", size = "md", className = "" }: MascotBubbleProps) {
  return (
    <div className={`flex items-end gap-3 ${className}`}>
      <span className={`${sizeClasses[size]} ${animationClasses[animation]}`}>
        {mascotEmoji[mascot]}
      </span>
      <div className="glass-card rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-xs">
        <p className="text-sm font-body text-foreground">{message}</p>
      </div>
    </div>
  );
}
