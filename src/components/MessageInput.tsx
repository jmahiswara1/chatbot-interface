"use strict";

import React from "react";
import { Send, Mic, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function MessageInput() {
    return (
        <div className="flex-none p-6 pt-2 bg-gradient-to-t from-white/60 to-transparent backdrop-blur-[2px] z-10 rounded-b-3xl">
            <div className="glass-panel rounded-2xl p-2 flex items-end gap-2 relative ring-1 ring-white/60 focus-within:ring-blue-400/50 focus-within:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300 bg-white/40">
                <Button variant="ghost" size="icon" className="p-3 text-slate-400 hover:text-blue-600 transition-colors rounded-xl hover:bg-white/60 h-auto w-auto">
                    <PlusCircle className="w-6 h-6" />
                </Button>
                <div className="flex-1 py-3">
                    <Textarea
                        placeholder="Message Lumina..."
                        className="w-full bg-transparent border-none text-slate-800 placeholder-slate-400 resize-none focus-visible:ring-0 text-sm max-h-32 font-medium min-h-[24px] py-0 px-0 shadow-none"
                        rows={1}
                    />
                </div>
                <div className="flex items-center gap-1 pb-1">
                    <Button variant="ghost" size="icon" className="p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-xl hover:bg-white/60 h-10 w-10">
                        <Mic className="w-5 h-5" />
                    </Button>
                    <Button size="icon" className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 w-10 h-10 group">
                        <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                </div>
            </div>
            <div className="text-center mt-3">
                <p className="text-[10px] text-slate-400 font-medium">AI generates responses. Check for accuracy.</p>
            </div>
        </div>
    );
}
