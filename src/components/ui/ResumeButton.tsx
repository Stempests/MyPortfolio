"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

interface ResumeButtonProps {
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  showIcon?: boolean;
  text?: string;
  iconType?: "view" | "download";
}

export function ResumeButton({
  className = "",
  variant = "primary",
  showIcon = true,
  text = "Resume",
  iconType = "view",
}: ResumeButtonProps) {
  const Icon = iconType === "view" ? FileText : Download;

  const variants = {
    primary: "bg-gradient-to-r from-neon-purple to-electric-blue text-white shadow-[0_0_20px_rgba(176,38,255,0.4)]",
    outline: "glass border-neon-purple/50 text-white hover:border-neon-purple",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {showIcon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </motion.a>
  );
}
