"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Rocket, Code2 } from "lucide-react";

export function WhyMeSection() {
  const cards = [
    {
      title: "Problem-Solving Mindset",
      description: "I don't just write code; I architect solutions. Every feature is designed to solve a real-world problem efficiently.",
      icon: <BrainCircuit className="w-8 h-8 text-neon-purple" />,
    },
    {
      title: "AI-First Thinking",
      description: "Integrating LLMs and ML models isn't an afterthought. It's the foundation of the intelligent products I build.",
      icon: <Code2 className="w-8 h-8 text-electric-blue" />,
    },
    {
      title: "Startup Vision",
      description: "Fast iteration, scalable architecture, and user-centric design. I build MVPs that are ready for millions of users.",
      icon: <Rocket className="w-8 h-8 text-subtle-red" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Me?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-electric-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
