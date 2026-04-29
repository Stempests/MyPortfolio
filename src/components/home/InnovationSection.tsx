"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Lightbulb } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function InnovationSection() {
  const points = [
    {
      icon: <Zap className="w-6 h-6 text-neon-purple" />,
      title: "Fast Execution",
      desc: "From concept to deployment at hackathon speed."
    },
    {
      icon: <Cpu className="w-6 h-6 text-electric-blue" />,
      title: "Scalable Architecture",
      desc: "Built to handle thousands of concurrent users."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-subtle-red" />,
      title: "Creative Problem Solving",
      desc: "Finding unconventional solutions to complex issues."
    }
  ];

  const [stats, setStats] = useState({ repos: 15, followers: 8, created: "2021" });

  useEffect(() => {
    fetch("https://api.github.com/users/Stempests")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos !== undefined) {
          setStats({
            repos: data.public_repos,
            followers: data.followers,
            created: new Date(data.created_at).getFullYear().toString(),
          });
        }
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-blue">Hackathon</span> Mindset
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Winning hackathons requires more than just coding skills. It demands rapid ideation, flawless execution under pressure, and a focus on delivering maximum impact in minimum time. I bring this same intensity to every product I build.
            </p>

            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg glass bg-white/5">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{point.title}</h4>
                    <p className="text-gray-400">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            {/* Visual System UI representation */}
            <div className="glass-dark p-6 rounded-2xl border border-neon-purple/30 shadow-[0_0_50px_rgba(176,38,255,0.1)]">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center p-3 rounded bg-white/5">
                  <span className="text-gray-400">GitHub Profile</span>
                  <span className="text-electric-blue font-bold flex items-center gap-2">
                    <FaGithub className="w-4 h-4 text-white" />
                    @Stempests
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded bg-white/5">
                  <span className="text-gray-400">Public Repos</span>
                  <span className="text-neon-purple font-bold">{stats.repos}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded bg-white/5">
                  <span className="text-gray-400">LinkedIn Connections</span>
                  <span className="text-green-400 font-bold">100+</span>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Developer Activity since</span>
                    <span>{stats.created}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-electric-blue to-neon-purple h-2 rounded-full w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
