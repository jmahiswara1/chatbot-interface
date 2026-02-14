"use client";

import React, { useRef } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { MessageInput } from "@/components/MessageInput";
import { ConversationHistory } from "@/components/ConversationHistory";
import { SessionStats } from "@/components/SessionStats";
import { motion } from "framer-motion";


export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background text-foreground font-display h-screen w-screen overflow-hidden relative selection:bg-blue-100 selection:text-blue-900">
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col h-full p-4 md:p-6 gap-6 max-w-[1600px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
        </motion.div>

        <div className="flex-1 flex gap-6 min-h-0 relative">
          <motion.main
            className="flex-1 flex flex-col bg-white/40 border border-white/60 shadow-xl rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-6 space-y-8 glass-scroll scroll-smooth" style={{ contain: 'layout style paint' }} ref={scrollRef}>
              <div className="flex justify-center">
                <span className="px-3 py-1 rounded-full bg-white/50 text-[10px] uppercase tracking-wider font-bold text-slate-500 border border-white/60 shadow-sm backdrop-blur-md">
                  Today, 10:23 AM
                </span>
              </div>

              <ChatMessage role="assistant" content="Hello! I'm Lumina AI V2. I can help you with code generation, data analysis, or visual design concepts. How can I assist you today?" />

              <ChatMessage role="user" content="Can you help me design a React component for a glassmorphism card? I need the Tailwind CSS classes." />

              <ChatMessage role="assistant" content="Certainly! Here is a clean implementation of a glassmorphism card using Tailwind CSS utility classes. I've included the backdrop blur and semi-transparent borders.">
                <div className="space-y-3 w-full">
                  <p className="mb-3 text-slate-800">Certainly! Here is a clean implementation of a glassmorphism card using Tailwind CSS utility classes. I&apos;ve included the backdrop blur and semi-transparent borders.</p>
                  <div className="relative mt-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-slate-100">
                      <span className="text-xs text-slate-500 font-mono font-semibold">GlassCard.tsx</span>
                      <button className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition-colors">
                        Copy
                      </button>
                    </div>
                    <div className="p-4 overflow-x-auto bg-[#f8fafc]">
                      <pre className="font-mono text-xs text-slate-600"><code>{`<div className="
  bg-white/40 
  backdrop-blur-lg 
  border border-white/50 
  rounded-xl 
  shadow-xl 
  p-6 
  text-slate-800">
  <h2 className="text-xl font-bold mb-2">Glass Card</h2>
  <p className="text-slate-600">Content goes here...</p>
</div>`}</code></pre>
                    </div>
                  </div>
                </div>
              </ChatMessage>

              <ChatMessage role="user" content="That looks perfect. Could you generate a quick preview?" />
            </div>

            <MessageInput />
          </motion.main>

          <aside className="hidden lg:flex flex-col w-80 gap-6">
            <motion.div
              className="flex-1 flex flex-col min-h-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ConversationHistory />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SessionStats />
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
