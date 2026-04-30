"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-dark py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <Code2 className="text-neon-purple w-10 h-10 group-hover:text-electric-blue transition-colors duration-300 drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-glow-blue transition-all"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-neon-purple/50 text-white font-medium hover:bg-neon-purple/20 hover:box-glow transition-all"
          >
            Hire Me
          </a>
          <SocialIcons />
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-dark py-4 flex flex-col items-center gap-4 md:hidden border-t border-white/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
