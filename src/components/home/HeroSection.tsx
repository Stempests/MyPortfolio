"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";
import Tilt from "react-parallax-tilt";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-neon-purple/30 mb-8"
          >
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-200">2x Hackathon Winner</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6 group cursor-default"
          >
            {/* Spotlight/Radial Glow behind name */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-neon-purple/20 blur-[60px] rounded-[100%] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <h1 className="relative text-7xl md:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-blue drop-shadow-[0_0_15px_rgba(176,38,255,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(176,38,255,0.8)] transition-all duration-500 animate-pulse">
              SHUBHAM
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-medium tracking-widest text-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:text-white transition-colors duration-300">
              AI-FULL STACK DEVELOPER
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Building <span className="text-glow text-neon-purple">Intelligent Systems</span>, 
            <br className="hidden md:block" /> Not Just Websites
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl"
          >
            AI-Driven Full Stack Developer turning ideas into scalable, high-performance intelligent products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass border-white/20 hover:bg-white/10 hover:border-white/40 transition-all font-medium flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-electric-blue" />
              Contact Me
            </a>
          </motion.div>

        </div>

        {/* Floating Abstract 3D Element representation */}
        <div className="mt-20 flex justify-center">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 rounded-full border-2 border-neon-purple/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-electric-blue/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-subtle-red/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 glass-dark rounded-2xl flex items-center justify-center box-glow rotate-45 hover:rotate-0 transition-all duration-500 cursor-pointer">
                  <span className="text-4xl -rotate-45 hover:rotate-0 transition-all duration-500">🚀</span>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
