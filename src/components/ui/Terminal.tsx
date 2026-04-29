"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TermIcon, X } from "lucide-react";

interface CommandLog {
  command: string;
  output: string;
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const parseCommand = (cmd: string): string => {
    const cleanCmd = cmd.trim().toLowerCase();
    
    switch (cleanCmd) {
      case "help":
        return `Available commands:
  about    - Show bio and tech journey
  projects - List primary deployed products
  contact  - Learn how to connect
  clear    - Erase terminal logs
  exit     - Shutdown CLI`;
      case "about":
        return `Shubham | AI Full Stack Developer
B.Tech CSE | 2x Hackathon Winner
Turning ambitious concepts into automated, highly responsive systems.`;
      case "projects":
        return `Deployed Products:
1. Strange Blog (AI Blogging)
2. Advertisement Wala (Digital Ads)
3. Task Management Workspace`;
      case "contact":
        return `Redirecting protocols... 
Please drop a line at: shubhamkt278@gmail.com or use the form down below.`;
      case "clear":
        setHistory([]);
        return "";
      case "exit":
        setIsOpen(false);
        return "Shutting down...";
      default:
        return `Command not recognized: '${cleanCmd}'. Type 'help' for support.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = parseCommand(input);
    if (input.trim().toLowerCase() !== "clear") {
      setHistory((prev) => [...prev, { command: input, output }]);
    }
    setInput("");
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 bg-black/60 glass border border-neon-purple/40 p-4 rounded-full hover:box-glow transition duration-300 text-neon-purple shadow-[0_0_20px_rgba(176,38,255,0.3)] animate-bounce"
      >
        <TermIcon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl h-[400px] bg-black/90 border border-electric-blue/30 rounded-xl flex flex-col font-mono text-sm shadow-[0_0_40px_rgba(0,229,255,0.2)]"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between bg-white/5 px-4 py-3 border-b border-white/10 rounded-t-xl">
                <span className="text-electric-blue font-bold flex items-center gap-2">
                  <TermIcon className="w-4 h-4 animate-pulse" /> SHUBHAM_CLI.sh
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Terminal Logs */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-gray-300 scrollbar-thin">
                <div>
                  <p className="text-neon-purple">System Online. Welcome back.</p>
                  <p className="text-gray-500">Type <span className="text-electric-blue font-bold">'help'</span> to see available modules.</p>
                </div>

                {history.map((log, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-electric-blue">
                      <span className="text-white opacity-40">$</span> {log.command}
                    </p>
                    {log.output && (
                      <p className="whitespace-pre-wrap pl-4 text-gray-400 border-l border-neon-purple/20">
                        {log.output}
                      </p>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Terminal Input */}
              <form
                onSubmit={handleSubmit}
                className="p-4 bg-white/5 rounded-b-xl border-t border-white/10 flex items-center gap-2"
              >
                <span className="text-neon-purple font-bold">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 focus:ring-0 font-mono"
                  placeholder="Enter command..."
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
