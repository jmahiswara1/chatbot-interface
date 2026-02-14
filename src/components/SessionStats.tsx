"use strict";

import React from "react";
import { Coins, MessageSquare, Clock } from "lucide-react";

export function SessionStats() {
    return (
        <div className="glass-panel rounded-3xl p-5 flex-none shadow-lg shadow-slate-200/40">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Session Stats</h3>
            <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-white/40 border border-white/50 flex flex-col gap-1 items-start">
                    <div className="flex items-center gap-1.5 text-blue-500 mb-1">
                        <Coins className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-wide opacity-80">Tokens</span>
                    </div>
                    <span className="text-lg font-bold text-slate-700 font-mono">2,405</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/40 border border-white/50 flex flex-col gap-1 items-start">
                    <div className="flex items-center gap-1.5 text-purple-500 mb-1">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-wide opacity-80">Msgs</span>
                    </div>
                    <span className="text-lg font-bold text-slate-700 font-mono">14</span>
                </div>
                <div className="col-span-2 p-3 rounded-2xl bg-white/40 border border-white/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold">Session Time</span>
                    </div>
                    <span className="text-base font-bold text-slate-700 font-mono">00:42:15</span>
                </div>
            </div>
        </div>
    );
}
