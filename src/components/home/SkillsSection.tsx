"use client";

import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    { name: "Next.js", color: "from-white to-gray-500" },
    { name: "React", color: "from-blue-400 to-electric-blue" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Python", color: "from-yellow-400 to-yellow-600" },
    { name: "C / C++", color: "from-blue-300 to-blue-500" },
    { name: "Java", color: "from-red-400 to-red-600" },
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "MongoDB", color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", color: "from-indigo-400 to-indigo-600" },
    { name: "Docker", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", color: "from-teal-400 to-teal-600" },
    { name: "Framer Motion", color: "from-purple-400 to-purple-600" },
    { name: "AI / LLMs", color: "from-neon-purple to-purple-600" },
  ];

  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-40 md:mb-56"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-blue drop-shadow-[0_0_10px_rgba(176,38,255,0.3)]">Tech Stack</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto rounded-full blur-[1px]" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(176, 38, 255, 0.4)",
                "0 0 50px rgba(176, 38, 255, 0.6)",
                "0 0 20px rgba(176, 38, 255, 0.4)",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 rounded-full bg-black/80 backdrop-blur-xl border-2 border-neon-purple/50 flex items-center justify-center z-20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 opacity-50" />
            <div className="relative flex flex-col items-center">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-blue">AI</span>
              <div className="w-8 h-0.5 bg-neon-purple rounded-full blur-[2px] animate-pulse" />
            </div>
            
            {/* Spinning inner border */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 rounded-full border border-dashed border-white/10"
            />
          </motion.div>

          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            const duration = 30;
            const delay = (index * -duration) / skills.length;
            // Alternate radius to prevent overlapping (double orbit effect)
            const radius = index % 2 === 0 ? "clamp(150px, 30vw, 250px)" : "clamp(190px, 40vw, 320px)";

            return (
              <motion.div
                key={skill.name}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: delay,
                }}
              >
                <div
                  className="pointer-events-auto"
                  style={{
                    transform: `translateX(${radius})`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }} // Counter-rotate so text stays upright
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: delay,
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
