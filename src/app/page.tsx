import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { BackgroundParticles } from "@/components/layout/BackgroundParticles";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyMeSection } from "@/components/home/WhyMeSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { InnovationSection } from "@/components/home/InnovationSection";
import { ContactSection } from "@/components/home/ContactSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { SocialIcons } from "@/components/ui/SocialIcons";

import { Terminal } from "@/components/ui/Terminal";
import { AIChatBot } from "@/components/ui/AIChatBot";

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
