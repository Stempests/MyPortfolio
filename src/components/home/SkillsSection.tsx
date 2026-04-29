"use client";

import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    { name: "Next.js 14", color: "from-white to-gray-500" },
    { name: "React", color: "from-blue-400 to-electric-blue" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", color: "from-teal-400 to-teal-600" },
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "MongoDB", color: "from-green-500 to-green-700" },
    { name: "Python", color: "from-yellow-400 to-yellow-600" },
    { name: "AI/LLMs", color: "from-neon-purple to-purple-600" },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(176, 38, 255, 0.5)",
                "0 0 60px rgba(176, 38, 255, 0.8)",
                "0 0 20px rgba(176, 38, 255, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 rounded-full bg-black border-2 border-neon-purple flex items-center justify-center z-20 relative"
          >
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-blue">AI</span>
          </motion.div>

          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const radius = 150;
            const radiusMd = 200;

            return (
              <motion.div
                key={skill.name}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * -2.5, // Distribute along the orbit
                }}
              >
                <div
                  className="pointer-events-auto"
                  style={{
                    transform: `translateX(${radiusMd}px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }} // Counter-rotate so text stays upright
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * -2.5,
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="glass px-4 py-2 rounded-full cursor-pointer hover:border-neon-purple transition-colors"
                  >
                    <span className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${skill.color}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/5 border-dashed" />
          </div>
        </div>
      </div>
    </section>
  );
}
