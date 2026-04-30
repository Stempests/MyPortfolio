"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Technological Awakening",
    description: "Ignited a deep-seated curiosity for computational systems and the underlying architecture of digital technology.",
    icon: "💡",
  },
  {
    title: "Mastering the Fundamentals",
    description: "Commenced a rigorous study of core programming paradigms, mastering low-level languages like C/C++ and high-level scripting with Python.",
    icon: "📚",
  },
  {
    title: "Academic Milestone",
    description: "Achieved significant academic success at L.S. College, establishing a robust foundation in mathematics and analytical logic.",
    icon: "🎓",
  },
  {
    title: "AI & Neural Networks",
    description: "Pivoted focus toward Artificial Intelligence, exploring the transformative potential of neural networks and autonomous systems.",
    icon: "🤖",
  },
  {
    title: "Engineering Excellence",
    description: "Pursued a Bachelor of Technology in Computer Science & Engineering at RIT Roorkee, immersing in professional software development standards.",
    icon: "🏫",
  },
  {
    title: "Full-Stack Engineering",
    description: "Engineered complex full-stack applications and AI-driven assistants, bridging the gap between innovative concepts and scalable production code.",
    icon: "🚀",
  },
  {
    title: "Competitive Innovation",
    description: "Secured top honors in multiple hackathons, demonstrating an ability to deliver high-impact, innovative solutions under rigorous pressure.",
    icon: "🏆",
  },
  {
    title: "Evolving Expertise",
    description: "Committed to perpetual professional growth, continuously integrating emerging technologies and advanced methodologies into my development workflow.",
    icon: "📈",
  },
];

export function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-blue drop-shadow-[0_0_15px_rgba(176,38,255,0.4)]">Journey</span> as a Developer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From Curiosity to Building AI-Powered Systems
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Path Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 hidden md:block" />
          
          {/* Animated Path (Desktop) */}
          <svg
            className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 hidden md:block h-full"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#roadmap-gradient)"
              strokeWidth="4"
              strokeDasharray="0 1"
              style={{ pathLength }}
              className="drop-shadow-[0_0_8px_rgba(176,38,255,0.6)]"
            />
            <defs>
              <linearGradient id="roadmap-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b026ff" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile Path Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/5 md:hidden" />
          <svg
            className="absolute left-4 top-0 bottom-0 w-2 md:hidden h-full"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#roadmap-gradient-mobile)"
              strokeWidth="4"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="roadmap-gradient-mobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b026ff" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-24 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-purple shadow-[0_0_10px_rgba(176,38,255,0.8)] z-10 hidden md:block" />

                {/* Mobile Node */}
                <div className="absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-dark-bg border-2 border-neon-purple md:hidden z-10 mt-6" />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-neon-purple/50 transition-all duration-500 group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-electric-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}>
                      <span className="text-4xl">{step.icon}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-glow transition-all">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {step.description}
                    </p>
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-3 ${
                      index % 2 === 0 ? "md:right-6" : "md:left-6"
                    } bg-neon-purple/20 border border-neon-purple/30 px-3 py-1 rounded-full text-[10px] font-bold text-neon-purple tracking-widest uppercase`}>
                      Step {index + 1}
                    </div>
                  </div>
                </motion.div>

                {/* Empty Space for Desktop Zig-Zag */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
