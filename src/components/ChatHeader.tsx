"use strict";

import React from "react";
import { Sparkles, History, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatHeader() {
    return (
        <header className="flex-none px-6 py-4 border-b border-white/40 flex items-center justify-between bg-white/30 backdrop-blur-sm z-10 rounded-t-3xl">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600 shadow-sm">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <div>
                    <h2 className="text-base font-bold text-slate-800">Lumina AI V2</h2>
                    <p className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Online & Ready
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="glass-button p-2 rounded-xl h-10 w-10">
                    <History className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="glass-button p-2 rounded-xl h-10 w-10">
                    <MoreVertical className="w-5 h-5" />
                </Button>
            </div>
        </header>
    );
}
