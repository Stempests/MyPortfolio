"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, GitBranch, GitFork, Zap, Hand, LayoutTemplate, Cpu, Layers, Sparkles, Move, MonitorSmartphone, Paintbrush } from "lucide-react";

/* === Types === */
interface Feature {
  icon: React.ReactNode;
  label: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  demoUrl: string;
  githubUrl: string;
  features?: Feature[];
  isNew?: boolean;
}

/* === Card variants for entrance animation === */
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* === Reusable Project Card === */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasFeatures = project.features && project.features.length > 0;

  return (
    <motion.div
      key={project.title}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable={true}
        glareMaxOpacity={0.12}
        glareColor="#ffffff"
        glarePosition="all"
        className="h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`relative glass-dark h-full rounded-2xl overflow-hidden border ${project.borderColor} group flex flex-col transition-all duration-500 hover:shadow-[0_0_40px_-4px_${project.glowColor}]`}
        >
          {/* Animated top gradient accent line */}
          <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accentColor} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />


          {/* Preview / placeholder area */}
          <div className={`h-44 w-full bg-gradient-to-br ${project.gradient} border-b border-white/5 relative overflow-hidden flex items-center justify-center shrink-0`}>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            {/* Animated background glow blob */}
            <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700`} />

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
              <span className="text-5xl font-black text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500 z-0 relative select-none tracking-tighter">
                {project.title.substring(0, 2).toUpperCase()}
              </span>
            )}

            {/* Hover overlay with action buttons */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
              {project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-neon-purple hover:text-white transition-all duration-200 backdrop-blur-md border border-white/10"
                  title="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-electric-blue hover:text-white transition-all duration-200 backdrop-blur-md border border-white/10"
                title="View on GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Content body */}
          <div className="p-6 flex-grow flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-glow transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features list (new projects only) */}
            {hasFeatures && (
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                {project.features!.map((f) => (
                  <li key={f.label} className="flex items-center gap-1.5 text-xs text-gray-300">
                    <span className="shrink-0 text-neon-purple/80">{f.icon}</span>
                    {f.label}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-neon-purple/40 hover:text-white transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub CTA button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-semibold border ${project.borderColor} bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 group/btn`}
            >
              <GitFork className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
              View on GitHub
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

/* === Section === */
export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Strange Blog",
      description: "AI-powered blogging platform with 3D elements and intelligent content management.",
      tags: ["Next.js", "MongoDB", "Three.js", "AI"],
      gradient: "from-neon-purple/20 to-transparent",
      accentColor: "from-neon-purple via-electric-blue to-transparent",
      borderColor: "border-white/10",
      glowColor: "rgba(176,38,255,0.25)",
      demoUrl: "https://strangeblog.vercel.app",
      githubUrl: "https://github.com/Stempests/strangeblog",
    },
    {
      title: "Advertisement Wala",
      description: "Smart ad management dashboard with analytics and automated campaign generation.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      gradient: "from-electric-blue/20 to-transparent",
      accentColor: "from-electric-blue via-neon-purple to-transparent",
      borderColor: "border-white/10",
      glowColor: "rgba(0,212,255,0.2)",
      demoUrl: "#",
      githubUrl: "https://github.com/Stempests/AdvertisementWala",
    },
    {
      title: "Task Management",
      description: "Collaborative workspace with real-time updates and AI task prioritization.",
      tags: ["Next.js", "Firebase", "Framer Motion"],
      gradient: "from-subtle-red/20 to-transparent",
      accentColor: "from-subtle-red via-neon-purple to-transparent",
      borderColor: "border-white/10",
      glowColor: "rgba(255,45,85,0.2)",
      demoUrl: "#",
      githubUrl: "https://github.com/Stempests/Task_Management",
    },
    {
      title: "Handy AI",
      description:
        "An AI-powered hand gesture interaction system enabling real-time hand tracking and gesture-based digital interactions using computer vision and 3D visual experiences.",
      tags: ["React", "JavaScript", "Three.js", "AI Gesture Recognition"],
      gradient: "from-violet-600/20 via-fuchsia-600/10 to-transparent",
      accentColor: "from-violet-500 via-fuchsia-500 to-pink-500",
      borderColor: "border-violet-500/20 hover:border-violet-500/50",
      glowColor: "rgba(139,92,246,0.35)",
      demoUrl: "#",
      githubUrl: "https://github.com/Stempests/HandyAI",

      features: [
        { icon: <Hand className="w-3 h-3" />, label: "Real-time tracking" },
        { icon: <Cpu className="w-3 h-3" />, label: "AI recognition" },
        { icon: <Zap className="w-3 h-3" />, label: "Interactive UI" },
        { icon: <Sparkles className="w-3 h-3" />, label: "Smooth animations" },
        { icon: <Layers className="w-3 h-3" />, label: "3D interactions" },
      ],
    },
    {
      title: "Intro Page",
      description:
        "A modern animated introduction landing page with smooth transitions, responsive design, and visually engaging UI elements for creating strong first impressions.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      gradient: "from-cyan-600/20 via-sky-600/10 to-transparent",
      accentColor: "from-cyan-400 via-sky-500 to-blue-600",
      borderColor: "border-cyan-500/20 hover:border-cyan-400/50",
      glowColor: "rgba(6,182,212,0.3)",
      demoUrl: "#",
      githubUrl: "https://github.com/Stempests/Intropage",

      features: [
        { icon: <MonitorSmartphone className="w-3 h-3" />, label: "Responsive layout" },
        { icon: <Move className="w-3 h-3" />, label: "Smooth animations" },
        { icon: <Paintbrush className="w-3 h-3" />, label: "Modern UI/UX" },
        { icon: <LayoutTemplate className="w-3 h-3" />, label: "Clean design" },
        { icon: <Zap className="w-3 h-3" />, label: "Interactive elements" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-subtle-red mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            A curated selection of projects spanning AI, full-stack engineering, and interactive experiences.
          </p>
        </motion.div>

        {/* Top row — original 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Bottom row — 2 new featured projects, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {projects.slice(3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
