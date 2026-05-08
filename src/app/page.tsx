"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyMeSection } from "@/components/home/WhyMeSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { InnovationSection } from "@/components/home/InnovationSection";
import { ContactSection } from "@/components/home/ContactSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { SocialIcons } from "@/components/ui/SocialIcons";

const CustomCursor = dynamic(() => import("@/components/layout/CustomCursor").then(mod => mod.CustomCursor), { ssr: false });
const BackgroundParticles = dynamic(() => import("@/components/layout/BackgroundParticles").then(mod => mod.BackgroundParticles), { ssr: false });
const Terminal = dynamic(() => import("@/components/ui/Terminal").then(mod => mod.Terminal), { ssr: false });
const AIChatBot = dynamic(() => import("@/components/ui/AIChatBot").then(mod => mod.AIChatBot), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-bg text-white overflow-hidden">
      <CustomCursor />
      <BackgroundParticles />
      <Terminal />
      <AIChatBot />
      <Navbar />
      
      <HeroSection />
      <WhyMeSection />
      <SkillsSection />
      <RoadmapSection />
      <ProjectsSection />
      <InnovationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 flex flex-col items-center gap-6 text-center text-gray-500 text-sm border-t border-white/5 relative z-10">
        <SocialIcons />
        <p>© {new Date().getFullYear()}. Built with Next.js, Tailwind & framer-motion.</p>
      </footer>
    </main>
  );
}
