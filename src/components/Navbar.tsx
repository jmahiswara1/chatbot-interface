"use strict";

import React from "react";
import { Bell, LayoutDashboard, MessageSquare, Archive, Bot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="flex-none mx-auto w-full max-w-3xl glass-panel rounded-full px-6 py-3 flex items-center justify-between z-50">
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Bot className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-800">
                    Lumina<span className="text-blue-500">AI</span>
                </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
                <Button variant="ghost" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/40">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                </Button>
                <Button variant="ghost" className="rounded-full text-blue-600 bg-white/50 shadow-sm border border-white/60 hover:bg-white/60">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat
                </Button>
                <Button variant="ghost" className="rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/40">
                    <Archive className="w-4 h-4 mr-2" />
                    Archives
                </Button>
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200/50">
                <button className="relative p-2 rounded-full text-slate-500 hover:text-blue-600 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
                </button>

                <div className="w-9 h-9 rounded-full border-2 border-white/60 p-0.5 cursor-pointer hover:border-blue-400 transition-colors overflow-hidden shadow-sm">
                    <Avatar className="w-full h-full">
                        <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-dTpYcUHSw5_EkFStEA-PeR-Qk8SJTl_P7irVm730sUxDb8PT2hfT2v5CPBp0PC3seMtWNMGODRXqmA1pOWlqKU_WfkBGMzjA62ts4QzTLVe5MFYBmGMikkg_Vdmvyoi1U_3Oe3nn5m4hTNkgo404YlQbOYy5n8a9ttWpS0CEVBwB7YsnWv-Qsp7429EdI_aCzjoLOagTHVemHTC4Lw9QtL1VS4cKcIoswMo8iPn3-rTwTsfFGd_qN54PIALi8OzxCGOFqS2bjv6A" alt="Profile" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    );
}
