"use client";

import React from "react";

const ResourcesSlide = () => {
    const categories = [
        { title: "Blog", icon: "📝", desc: "Latest industry insights" },
        { title: "Reports", icon: "📊", desc: "Data-driven whitepapers" },
        { title: "Podcast", icon: "🎙️", desc: "Merchant success stories" },
        { title: "Webinars", icon: "🎥", desc: "Interactive training" },
    ];

    const tools = [
        { title: "ROI Calculator", sub: "Calculate your recovery potential", icon: "🧮" },
        { title: "Reason Codes", sub: "Searchable database of codes", icon: "🔍" },
    ];

    return (
        <div className="grid grid-cols-[auto_350px] gap-2 p-2 bg-[#0a0a0a] min-w-[1000px]">
            <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                    <div key={cat.title} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group">
                        <div className="text-2xl mb-4 group-hover:scale-105 transition-transform">{cat.icon}</div>
                        <h4 className="text-white font-black text-sm uppercase tracking-wide mb-1">{cat.title}</h4>
                        <p className="text-gray-500 text-[10px] font-medium">{cat.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                <div className="px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest bg-zinc-900/30 rounded-xl">Tools</div>
                {tools.map((item) => (
                    <div key={item.title} className="p-5 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-800 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-lg">{item.icon}</span>
                            <h5 className="text-white font-black text-xs uppercase tracking-tight">{item.title}</h5>
                        </div>
                        <p className="text-gray-500 text-[10px] leading-tight font-medium">{item.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourcesSlide;
