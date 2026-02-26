"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
    Activity,
    CreditCard,
    ShieldCheck,
    Settings,
    Globe,
    Zap,
    Bell,
    ShoppingCart
} from "lucide-react";

const integrations = [
    { name: "Stripe", icon: CreditCard, color: "#635BFF", startX: -600, startY: -400 },
    { name: "Shopify", icon: ShoppingCart, color: "#96BF48", startX: 700, startY: -200 },
    { name: "PayPal", icon: Globe, color: "#003087", startX: -500, startY: 500 },
    { name: "Adyen", icon: ShieldCheck, color: "#00FFD1", startX: 650, startY: 400 },
    { name: "Checkout", icon: Zap, color: "#00CCFF", startX: -800, startY: 100 },
    { name: "Braintree", icon: Settings, color: "#FFFFFF", startX: 550, startY: 600 },
    { name: "Authorize", icon: Activity, color: "#100", startY: -650 },
    { name: "Square", icon: Bell, color: "#3E4347", startX: -400, startY: 700 },
    { name: "Visa", icon: Globe, color: "#1A1F71", startX: -900, startY: -100 },
    { name: "Mastercard", icon: CreditCard, color: "#EB001B", startX: 800, startY: -500 },
];

const IntegrationsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black overflow-clip">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Grid/Mesh */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,transparent_70%)]" />
                </div>

                {/* Central Hub */}
                <motion.div
                    style={{
                        scale: useTransform(smoothProgress, [0, 0.4], [0.8, 1]),
                        opacity: useTransform(smoothProgress, [0, 0.05, 0.8, 1], [1, 1, 1, 0]),
                    }}
                    className="relative z-20 text-center"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-widest uppercase">
                        Connectivity Ecosystem
                    </div>
                    <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
                        One Platform<br />
                        <span className="text-blue-500">Unlimited</span><br />
                        Integrations
                    </h2>
                    <p className="mt-8 text-gray-500 text-sm max-w-[400px] mx-auto font-medium leading-relaxed uppercase tracking-wider">
                        We connect to your existing stack in seconds, creating a unified narrative for your financial data.
                    </p>
                </motion.div>

                {/* Integration Icons - Orbital Hub Layout */}
                <div className="absolute inset-0 pointer-events-none">
                    {integrations.map((item, index) => {
                        const scale = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [0.8, 1.2, 1, 0.5]);
                        const opacity = useTransform(smoothProgress, [0, 0.05, 0.85, 1], [1, 1, 1, 0]);

                        // Calculate orbital position
                        const angle = (index / integrations.length) * Math.PI * 2;
                        const radius = 280; // Hub orbital distance
                        const targetX = Math.cos(angle) * radius;
                        const targetY = Math.sin(angle) * radius;

                        // Final transformation: Converge to orbit
                        const x = useTransform(smoothProgress, [0, 0.8], [item.startX, targetX]);
                        const y = useTransform(smoothProgress, [0, 0.8], [item.startY, targetY]);

                        return (
                            <motion.div
                                key={item.name}
                                style={{
                                    x,
                                    y,
                                    scale,
                                    opacity,
                                    left: "50%",
                                    top: "50%",
                                    marginLeft: "-32px",
                                    marginTop: "-32px",
                                }}
                                className="absolute z-10 p-4 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl"
                            >
                                <item.icon
                                    size={30}
                                    style={{ color: item.color }}
                                />

                                {/* Dynamic Connectivity Lines to Center Hub */}
                                <svg className="absolute inset-0 -z-10 w-[1200px] h-[1200px] pointer-events-none overflow-visible translate-x-1/2 translate-y-1/2 rotate-180">
                                    <motion.path
                                        d={`M 0,0 L ${-targetX},${-targetY}`}
                                        stroke="white"
                                        strokeWidth="0.5"
                                        fill="none"
                                        strokeDasharray="4 4"
                                        style={{
                                            opacity: useTransform(smoothProgress, [0.4, 0.8], [0, 0.2]),
                                            pathLength: useTransform(smoothProgress, [0.4, 0.85], [0, 1]),
                                        }}
                                        className="marching-ants"
                                    />
                                </svg>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <div className="w-[1px] h-12 bg-white/20" />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Scroll to Connect</span>
            </div>
        </section>
    );
};

export default IntegrationsSection;
