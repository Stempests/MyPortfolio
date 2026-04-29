"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-electric-blue/20 rounded-full blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-subtle-red/10 rounded-full blur-[150px] mix-blend-screen animate-blob" style={{ animationDelay: "4s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
    </div>
  );
}
