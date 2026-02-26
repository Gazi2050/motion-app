"use client";

import React from "react";

const CustomersSlide = () => {
    const caseStudy = {
        title: "All Case Studies",
        desc: "See how merchants scale with Chargeflow.",
        featured: ["obvi.", "Caraway", "Huel", "Hexclad"]
    };

    const categories = [
        { title: "eCommerce", sub: "Obvi, Hexclad", stat: "170% Win-rate increase", type: "Obvi." },
        { title: "SaaS", sub: "Elementor, Framer", stat: "90% Reduction in time", type: "Elementor" },
        { title: "Marketplace", sub: "Fanatics", stat: "2X Chargeback Win Rate", type: "Fanatics" },
        { title: "Travel", sub: "Luxury Escapes", stat: "328 hrs saved", type: "Travel" },
    ];

    return (
        <div className="grid grid-cols-[1fr_repeat(4,180px)] gap-2 p-3 bg-[#0a0a0a] min-w-[1000px]">
            {/* Featured Case Studies */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/5 hover:bg-zinc-800 transition-all duration-500 cursor-pointer group flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                    <h4 className="text-white text-lg font-black mb-1 uppercase tracking-tight">{caseStudy.title}</h4>
                    <p className="text-gray-500 text-xs">{caseStudy.desc}</p>
                </div>
                <div className="relative z-10 flex gap-2 flex-wrap mt-6">
                    {caseStudy.featured.map(f => (
                        <span key={f} className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-400 font-bold">{f}</span>
                    ))}
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl" />
            </div>

            {/* Category Stats */}
            {categories.map((cat) => (
                <div
                    key={cat.title}
                    className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group"
                >
                    <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">{cat.title}</div>
                    <div className="text-white text-xl font-black mb-1">{cat.stat.split(' ')[0]}<span className="text-xs ml-0.5">{cat.stat.split(' ').slice(1).join(' ')}</span></div>
                    <p className="text-gray-600 text-[10px] font-bold uppercase tracking-tighter">{cat.type}</p>
                    <div className="mt-8 text-[9px] font-black text-gray-500 group-hover:text-white transition-colors uppercase">Read Story ↗</div>
                </div>
            ))}
        </div>
    );
};

export default CustomersSlide;
