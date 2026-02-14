"use strict";

import React from "react";

export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200 rounded-full mix-blend-multiply filter blur-[40px] opacity-50 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-200 rounded-full mix-blend-multiply filter blur-[40px] opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-purple-200 rounded-full mix-blend-multiply filter blur-[40px] opacity-50 animate-blob animation-delay-4000"></div>
        </div>
    );
}
