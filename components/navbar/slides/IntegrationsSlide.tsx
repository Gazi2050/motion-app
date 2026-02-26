"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const IntegrationsSlide = () => {
    const integrations = [
        { name: "Stripe", color: "text-[#635BFF]" },
        { name: "Shopify", color: "text-[#96BF48]" },
        { name: "PayPal", color: "text-[#003087]" },
        { name: "Adyen", color: "text-[#00FFD1]" },
        { name: "Checkout.com", color: "text-[#00CCFF]" },
        { name: "Braintree", color: "text-[#FFFFFF]" },
        { name: "Authorize.net", color: "text-[#004B8D]" },
        { name: "Square", color: "text-[#3E4347]" },
    ];

    return (
        <div className="flex flex-col gap-4 p-6 min-w-[1000px] bg-[#0a0a0a]">
            {/* Top Section: Domu-inspired Hub */}
            <div className="relative h-[240px] rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden flex items-center justify-center">
                {/* Connecting Lines (Dotted Marquee Ants) */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1000 240">
                        <path
                            d="M 200,40 Q 500,120 800,40"
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="4 4"
                            className="marching-ants"
                        />
                        <path
                            d="M 150,200 Q 500,120 850,200"
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="4 4"
                            className="marching-ants-reverse"
                        />
                        <path
                            d="M 50,120 L 950,120"
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="4 4"
                            className="marching-ants"
                            style={{ animationDuration: '3s' }}
                        />
                    </svg>
                </div>

                <div className="relative z-10 text-center">
                    <h3 className="text-white text-3xl font-black mb-2 tracking-tighter uppercase italic">
                        One platform, unlimited integrations
                    </h3>
                    <p className="text-gray-500 text-sm max-w-[460px] mx-auto font-medium">
                        Connect your favorite payment processors and eCommerce platforms in seconds.
                    </p>
                    <button className="mt-6 bg-[#3448FF] px-6 py-2 rounded-full text-xs font-black text-white hover:scale-105 transition-transform shadow-lg shadow-blue-600/20">
                        Explore Marketplace
                    </button>
                </div>

                {/* Floating "Nodes" purely visual */}
                <div className="absolute top-10 left-10 w-12 h-12 bg-white/5 rounded-xl border border-white/10 blur-[1px]" />
                <div className="absolute bottom-10 right-20 w-10 h-10 bg-white/5 rounded-lg border border-white/10 blur-[2px]" />
                <div className="absolute top-20 right-40 w-8 h-8 bg-blue-500/10 rounded-full border border-blue-500/20" />
            </div>

            {/* Bottom Section: Logo Marquee */}
            <div className="py-2">
                <Marquee gradient={true} gradientColor="black" speed={30} className="overflow-hidden">
                    <div className="flex gap-12 items-center px-6">
                        {integrations.map((item) => (
                            <div key={item.name} className={`text-sm font-black uppercase italic tracking-tighter ${item.color} opacity-40 hover:opacity-100 transition-opacity cursor-default`}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default IntegrationsSlide;
