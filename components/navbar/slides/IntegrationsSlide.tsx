"use client";

import React from "react";

const IntegrationsSlide = () => {
    const featured = {
        title: "All Integrations",
        desc: "Choose from hundreds of integrated platforms.",
    };

    const integrations = [
        { title: "Stripe", sub: "#1 Chargeback Solution for Stripe Merchants" },
        { title: "Shopify", sub: "Powering 30k+ Shopify Merchants" },
        { title: "WooCommerce", sub: "Native WooCommerce Integration" },
    ];

    return (
        <div className="grid grid-cols-[1.5fr_1fr] gap-2 p-4 min-w-[1000px] bg-[#0a0a0a]">
            {/* Featured Section */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                    <h4 className="text-white text-2xl font-black mb-2">{featured.title}</h4>
                    <p className="text-gray-500 text-sm max-w-[200px]">{featured.desc}</p>
                </div>
                <div className="relative z-10 mt-12 bg-white text-black px-4 py-2 rounded-full font-bold text-xs inline-block w-fit">
                    Browse All <span>→</span>
                </div>
                {/* Abstract shape */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            {/* List Section */}
            <div className="flex flex-col gap-2">
                {integrations.map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-zinc-900 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-800 transition-all cursor-pointer group">
                        <h5 className="text-white font-bold text-sm mb-1">{item.title}</h5>
                        <p className="text-gray-500 text-[10px] leading-tight">{item.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntegrationsSlide;
