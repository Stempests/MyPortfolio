"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://share.google/HKGbQHKf4tCAmTpwA",
    color: "group-hover:text-purple-400",
    glow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/shubham-kt-060b70386",
    color: "group-hover:text-blue-400",
    glow: "group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/_.hey_shubham._",
    color: "group-hover:text-pink-400",
    glow: "group-hover:shadow-[0_0_15px_rgba(244,114,182,0.5)]",
  },
];

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.div
            key={link.name}
            // Floating animation (slow up/down)
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2, // Staggered floating
            }}
            className="relative group"
          >
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 whitespace-nowrap z-50">
              {link.name}
            </div>

            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full glass border-white/10 transition-all duration-300 ${link.glow} overflow-hidden`}
            >
              {/* Glow pulse effect (background) */}
              <div className="absolute inset-0 bg-white/5 animate-pulse opacity-50" />
              
              {/* Click ripple placeholder overlay */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full opacity-0"
                whileTap={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />

              <Icon className={`w-5 h-5 text-gray-300 transition-colors duration-300 relative z-10 ${link.color}`} />
            </motion.a>
          </motion.div>
        );
      })}
    </div>
  );
}
