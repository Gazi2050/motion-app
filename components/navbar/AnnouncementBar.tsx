"use client";

import React from "react";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";

interface AnnouncementBarProps {
    isShrunk: boolean;
}

const AnnouncementBar = ({ isShrunk }: AnnouncementBarProps) => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const text = "carusolan — Announcing our $35m series a funding to take down friendly fraud. Join the revolution in chargeback automation. Fully integrated with Stripe, Shopify, and WooCommerce. Sign up today for a free trial!";

    if (!mounted) return null;

    return (
        <motion.div
            layout
            initial={false}
            animate={{
                width: isShrunk ? "1000px" : "100vw",
                maxWidth: isShrunk ? "1000px" : "100vw",
                paddingLeft: isShrunk ? "40px" : "0px",
                paddingRight: isShrunk ? "40px" : "0px",
                top: isShrunk ? "12px" : "0px",
                borderRadius: isShrunk ? "100px" : "0px",
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
                mass: 1
            }}
            className="fixed left-1/2 -translate-x-1/2 z-[110] h-10 bg-white/10 backdrop-blur-xl border-b border-white/10 flex items-center justify-center overflow-hidden shadow-2xl"
        >
            <div className="flex items-center gap-3 w-full">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 shrink-0 z-10">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                </span>

                <div className="flex-grow overflow-hidden">
                    <Marquee gradient={false} speed={40} className="w-full">
                        <p className="text-[10px] font-black tracking-widest text-white uppercase italic pr-20">
                            {text}
                        </p>
                    </Marquee>
                </div>

                <div className="flex items-center gap-3 shrink-0 z-10">
                    <span className="text-white/50 text-xs">|</span>
                    <button className="text-[10px] font-black text-white hover:underline uppercase whitespace-nowrap">
                        Read More →
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default AnnouncementBar;
