"use strict";

import React from "react";
import { Search } from "lucide-react";

interface Conversation {
    id: string;
    title: string;
    preview: string;
    date: string;
}

const conversations: Conversation[] = [
    { id: "1", title: "Glassmorphism UI", preview: "Can you help me design a React component...", date: "Just now" },
    { id: "2", title: "Python Data Script", preview: "How do I optimize this pandas dataframe operation...", date: "Yesterday" },
    { id: "3", title: "Email Draft", preview: "Draft a follow-up email for the marketing meeting...", date: "2 days ago" },
    { id: "4", title: "SQL Query Fix", preview: "I'm getting a syntax error near INNER JOIN...", date: "Oct 24" },
    { id: "5", title: "Logo Concepts", preview: "Generate 5 minimalist logo ideas for a coffee shop...", date: "Oct 22" },
    { id: "6", title: "Blog Post Ideas", preview: "List 10 trending topics in AI for 2024...", date: "Oct 20" },
];

export function ConversationHistory() {
    return (
        <div className="glass-panel rounded-3xl p-5 flex-1 flex flex-col gap-4 shadow-lg shadow-slate-200/40 min-h-0">
            <div className="flex items-center justify-between pb-2 border-b border-white/40">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Conversation History</h3>
                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Search className="w-4 h-4" />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto glass-scroll space-y-2 pr-1">
                {conversations.map((chat) => (
                    <div key={chat.id} className="group cursor-pointer">
                        <div className="p-3 rounded-2xl bg-white/40 border border-white/60 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold text-slate-700 truncate">{chat.title}</span>
                                <span className="text-[10px] text-slate-400">{chat.date}</span>
                            </div>
                            <p className="text-xs text-slate-500 truncate group-hover:text-slate-600 transition-colors">
                                {chat.preview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
