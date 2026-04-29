"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, GitBranch } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Strange Blog",
      description: "AI-powered blogging platform with 3D elements and intelligent content management.",
      tags: ["Next.js", "MongoDB", "Three.js", "AI"],
      gradient: "from-neon-purple/20 to-transparent",
      demoUrl: "https://strangeblog.vercel.app",
      githubUrl: "https://github.com/Stempests/strangeblog",
    },
    {
      title: "Advertisement Wala",
      description: "Smart ad management dashboard with analytics and automated campaign generation.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      gradient: "from-electric-blue/20 to-transparent",
      demoUrl: "#",
      githubUrl: "https://github.com/Stempests/AdvertisementWala",
    },
    {
      title: "Task Management",
      description: "Collaborative workspace with real-time updates and AI task prioritization.",
      tags: ["Next.js", "Firebase", "Framer Motion"],
      gradient: "from-subtle-red/20 to-transparent",
      demoUrl: "#",
      githubUrl: "https://github.com/Stempests/Task_Management",
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-subtle-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                className="h-full"
              >
                <div className="glass-dark h-full rounded-2xl overflow-hidden border border-white/10 group flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} border-b border-white/5 relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    {project.demoUrl !== "#" ? (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none group-hover:scale-110 transition-transform duration-500 opacity-70 mix-blend-screen z-0">
                        <iframe
                          src={project.demoUrl}
                          className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] border-none"
                          tabIndex={-1}
                          scrolling="no"
                        />
                      </div>
                    ) : (
                      <span className="text-4xl font-bold text-white/20 group-hover:scale-110 transition-transform duration-500 z-0 relative">
                        {project.title.substring(0, 2).toUpperCase()}
                      </span>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href={project.demoUrl} className="p-3 bg-white/10 rounded-full hover:bg-neon-purple hover:text-white transition-colors backdrop-blur-md">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href={project.githubUrl} className="p-3 bg-white/10 rounded-full hover:bg-electric-blue hover:text-white transition-colors backdrop-blur-md">
                        <GitBranch className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-glow transition-all">{project.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
