"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";

interface MessageItem {
  role: "user" | "assistant";
  content: string;
}

export function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState<MessageItem[]>([
    { role: "assistant", content: "Greetings. I am Shubham's AI Agent. Ask me anything about his technical experience." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatLog, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: MessageItem = { role: "user", content: input };
    setChatLog((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...chatLog, userMsg] })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setChatLog((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (err) {
      setChatLog((prev) => [...prev, { role: "assistant", content: "Fatal network error. Check API access routes." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-black/60 glass border border-electric-blue/40 p-4 rounded-full hover:box-glow transition duration-300 text-electric-blue shadow-[0_0_20px_rgba(0,229,255,0.3)]"
      >
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-out Backdrop */}
            <div 
              className="fixed inset-0 z-30 cursor-default" 
              onClick={() => setIsOpen(false)} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed bottom-24 right-6 z-40 w-72 md:w-80 h-[420px] bg-black/90 glass border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold text-sm">Shubham AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chats */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-thin">
              {chatLog.map((chat, idx) => (
                <div key={idx} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[75%] px-4 py-2 rounded-xl border ${
                    chat.role === "user" 
                      ? "bg-electric-blue/10 border-electric-blue/30 text-white" 
                      : "bg-white/5 border-white/10 text-gray-300"
                  }`}>
                    {chat.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 text-gray-400">
                    <Loader2 className="w-4 h-4 animate-spin text-electric-blue" />
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleSend} className="p-3 bg-white/5 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-500 focus:ring-0"
              />
              <button
                type="submit"
                disabled={isTyping}
                className="p-2 bg-electric-blue/20 hover:bg-electric-blue text-electric-blue hover:text-black rounded-lg transition duration-200 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
