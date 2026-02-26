"use client";

import React from "react";

const ProductSlide = () => {
  const products = [
    {
      title: "Prevent",
      desc: "Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.",
      badge: "NEW"
    },
    {
      title: "Automation",
      desc: "Fully automated chargeback recovery with 4x ROI guarantee.",
      badge: "CORE"
    },
    {
      title: "Alerts",
      desc: "Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.",
      badge: "VERIFIED"
    },
    {
      title: "Insights",
      desc: "Get a bird's-eye view into your payments and chargebacks, all in a single dashboard.",
      badge: "FREE"
    },
    {
      title: "Connect",
      desc: "Integrate Chargeflow into your platform via Embedding, Whitelabel or API.",
      badge: "FOR PLATFORMS"
    },
  ];

  return (
    <div className="flex gap-1 p-2 bg-[#0a0a0a] w-[1000px]">
      {products.map((item) => (
        <div
          key={item.title}
          className="group cursor-pointer p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/50 hover:bg-zinc-800 transition-all duration-300 flex-1 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="w-4 h-4 bg-blue-500/30 rounded-full blur-[1px]" />
            </div>
            <div className="flex flex-col gap-1.5 mb-2">
              <h4 className="text-white text-xs font-black tracking-widest uppercase">{item.title}</h4>
              {item.badge && (
                <span className="w-fit px-1.5 py-0.5 text-[8px] bg-white text-black rounded-sm font-black uppercase tracking-tighter">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="text-gray-500 text-[10px] leading-relaxed font-medium">{item.desc}</p>
          </div>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[9px] font-black text-blue-500 uppercase tracking-tighter">
            Learn More <span>→</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSlide;
