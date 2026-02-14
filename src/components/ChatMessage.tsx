"use strict";

import React from "react";
import { Bot, Copy, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
    timestamp?: string;
    avatarUrl?: string;
    children?: React.ReactNode;
}

export const ChatMessage = React.memo(function ChatMessage({ role, content, avatarUrl, children }: ChatMessageProps) {
    const isAI = role === "assistant";

    return (
        <div className={cn("flex gap-3 md:gap-4 max-w-[85%] md:max-w-3xl", !isAI && "flex-row-reverse ml-auto")}>
            <div className={cn(
                "flex-none w-8 h-8 rounded-lg flex items-center justify-center mt-1 shadow-sm overflow-hidden",
                isAI ? "bg-blue-100 text-blue-600" : "border-2 border-white"
            )}>
                {isAI ? (
                    <Bot className="w-5 h-5" />
                ) : (
                    <Avatar className="w-full h-full">
                        <AvatarImage src={avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuDNP8qdvlBuzzdxVmYPlVL4O7OKT5UXe2HBK3_21tUPXkMeX7j2l8d7YafcW777l9pgoRQcVZ1Bhv_swc7yw90RCJUWH-9x1jC2QiEM2iaJdsAJ1IoXHofVqZtkdS9HR2z1MTYTSfV6NTzq-fjuSLwjO1TPJmtljFwZb-iYt--8xRFJ_yTyD-e-pKzCK6C_2NKB1x7znKUdwuLXwEC8YZ6YJ9GCbmMe20KAvS-3EqMiMos6eMtSkO4cQjLQmD6R7ohB329f_6RMMLsA"} alt="Avatar" className="object-cover" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                )}
            </div>

            <div className={cn("space-y-2 min-w-0", !isAI && "text-right")}>
                <div className={cn(
                    "p-3 md:p-5 rounded-2xl text-sm leading-relaxed shadow-sm relative group break-words",
                    isAI
                        ? "glass-panel-heavy rounded-tl-sm text-slate-700 border border-white/60"
                        : "bg-gradient-to-br from-blue-500 to-indigo-600 rounded-tr-sm text-white shadow-md shadow-blue-200"
                )}>
                    {children ? children : <p>{content}</p>}

                    {isAI && (
                        <div className="absolute -right-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/60 text-slate-400 hover:text-blue-600 hover:bg-white shadow-sm">
                                <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/60 text-slate-400 hover:text-blue-600 hover:bg-white shadow-sm">
                                <ThumbsUp className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});
