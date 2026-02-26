"use client";

import React from "react";

const CompanySlide = () => {
    const items = [
        { title: "Who We Are", desc: "Our mission and story", icon: "🤝" },
        { title: "Brand", desc: "Assets and guidelines", icon: "🎨" },
        { title: "Careers", desc: "Join our global team", badge: "WE'RE HIRING!", icon: "🚀" },
        { title: "Become a Partner", desc: "Build with Chargeflow", icon: "🌍" },
        { title: "Contact Us", desc: "Get in touch with us", icon: "📞" },
    ];

    return (
        <div className="grid grid-cols-3 gap-2 p-4 min-w-[1000px] bg-[#0a0a0a]">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-xl group-hover:scale-110 transition-transform">{item.icon}</div>
                        {item.badge && (
                            <span className="px-1.5 py-0.5 text-[8px] bg-blue-600 text-white rounded-sm font-black italic">
                                {item.badge}
                            </span>
                        )}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] leading-tight">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default CompanySlide;
